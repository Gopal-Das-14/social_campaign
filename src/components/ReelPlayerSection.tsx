import React, { useState, useEffect, useRef } from 'react';
import { REEL_BEATS, ReelBeat } from '../data/campaignData';

export const ReelPlayerSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(11.25);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const totalDuration = 15.0;

  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());
  const audioContextRef = useRef<AudioContext | null>(null);

  // Determine current active beat
  const activeBeat =
    REEL_BEATS.find(
      (beat) => currentTime >= beat.startSec && currentTime < beat.endSec
    ) || REEL_BEATS[REEL_BEATS.length - 1];

  // Playback loop
  useEffect(() => {
    if (isPlaying) {
      lastTimeRef.current = performance.now();
      const updateLoop = (now: number) => {
        const delta = (now - lastTimeRef.current) / 1000;
        lastTimeRef.current = now;

        setCurrentTime((prev) => {
          let next = prev + delta;
          if (next >= totalDuration) {
            next = 0; // loop
          }
          return next;
        });

        animationFrameRef.current = requestAnimationFrame(updateLoop);
      };

      animationFrameRef.current = requestAnimationFrame(updateLoop);
    } else {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  // Subtle web audio synth effect when toggled on
  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioCtx();
        }
        if (audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume();
        }
        playChirp(440, 0.1);
      } catch {
        // audio might not be supported in some hermetic contexts
      }
    }
  };

  const playChirp = (freq: number, duration: number) => {
    if (!audioContextRef.current || isMuted) return;
    try {
      const osc = audioContextRef.current.createOscillator();
      const gain = audioContextRef.current.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioContextRef.current.currentTime);
      gain.gain.setValueAtTime(0.05, audioContextRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioContextRef.current.destination);
      osc.start();
      osc.stop(audioContextRef.current.currentTime + duration);
    } catch {
      // ignore
    }
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    playChirp(isPlaying ? 220 : 580, 0.08);
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = ratio * totalDuration;
    setCurrentTime(newTime);
    playChirp(350 + ratio * 200, 0.05);
  };

  const handleJumpToBeat = (beat: ReelBeat) => {
    setCurrentTime(beat.startSec);
    setIsPlaying(true);
    playChirp(520, 0.08);
  };

  const formatTimestamp = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    const hundredths = Math.floor((sec % 1) * 100);
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}.${hundredths.toString().padStart(2, '0')}`;
  };

  return (
    <section
      id="video-reel"
      className="px-5 md:px-10 lg:px-16 max-w-7xl mx-auto py-24 border-t border-[#3a322d]/30"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse"></span>
            <span className="font-space text-[11px] font-semibold uppercase tracking-widest text-[#ffb693]">
              High-Velocity Shortform Asset
            </span>
          </div>
          <h2 className="font-space text-3xl md:text-5xl font-medium text-[#e3e2e6] tracking-tight uppercase">
            CAMPAIGN VIDEO ASSET (01 REEL)
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-sm bg-[#292a2d] border border-[#3a322d]/60 font-space text-[12px] font-semibold text-[#ffb693]">
            FORMAT: 9:16 VERTICAL MOTION
          </span>
          <span className="px-3 py-1 rounded-sm bg-[#292a2d] border border-[#3a322d]/60 font-space text-[12px] text-[#a0a4b0]">
            60 FPS PRORES
          </span>
        </div>
      </div>

      {/* Main Video Container Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Interactive Video Player Mockup */}
        <div className="lg:col-span-7">
          <div
            className={`relative rounded-xl overflow-hidden bg-[#0d0e11] border border-[#3a322d]/50 shadow-2xl transition-all ${
              isFullscreen ? 'fixed inset-4 z-50 bg-[#0d0e11]/95 flex flex-col justify-center' : ''
            }`}
          >
            {/* Simulated Video Frame / Canvas */}
            <div className="relative aspect-video w-full bg-gradient-to-br from-[#0d0e11] via-[#1b1b1f] to-[#121316] flex flex-col justify-between p-6 overflow-hidden select-none">
              {/* Cybernetic Background Grid Overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #ff6b0015 1px, transparent 1px), linear-gradient(to bottom, #ff6b0015 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Dynamic Glow Aura in background */}
              <div
                className="absolute w-72 h-72 rounded-full blur-3xl pointer-events-none transition-all duration-700"
                style={{
                  backgroundColor: `${activeBeat.accentColor}25`,
                  top: '20%',
                  left: '30%',
                }}
              />

              {/* Video Header Chrome */}
              <div className="relative z-10 flex items-center justify-between text-[#e3e2e6]">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: activeBeat.accentColor }}
                  />
                  <span className="font-space text-xs text-[#e3e2e6] tracking-wider font-semibold">
                    00:15 / 00:15 [4K HDR MASTER]
                  </span>
                </div>
                <span className="font-space text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-[#292a2d]/80 border border-[#3a322d]/60 text-[#ffb693] font-semibold">
                  Instagram Reel / Meta Feed
                </span>
              </div>

              {/* Animated Kinetic Center Graphics */}
              <div className="relative z-10 my-auto py-6 text-center flex flex-col items-center justify-center">
                {/* Large Radiant Center Play Trigger */}
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 rounded-full bg-[#ff6b00]/90 hover:bg-[#ff6b00] text-[#0d0e11] flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-110 active:scale-95 group mb-4 cursor-pointer"
                  aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
                >
                  <span
                    className="material-symbols-outlined text-[42px] ml-1 text-[#0d0e11]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>

                <div className="font-space text-[11px] tracking-widest text-[#ffb693] uppercase mb-1 font-bold">
                  {isPlaying ? 'KINETIC SEQUENCE ACTIVE' : 'REEL READY FOR PLAYBACK'}
                </div>

                <div className="font-space text-xl md:text-2xl lg:text-3xl font-semibold text-[#e3e2e6] tracking-tight uppercase px-4">
                  IDEAS <span className="text-[#ff6b00]">➔</span> DESIGN{' '}
                  <span className="text-[#ff6b00]">➔</span> TECH{' '}
                  <span className="text-[#ff6b00]">➔</span> GROWTH
                </div>

                {/* Sub-label reflecting current beat scene */}
                <div className="mt-3 px-3 py-1 rounded bg-[#121316]/80 border border-[#3a322d]/80 font-space text-xs text-[#e3e2e6] inline-flex items-center gap-2">
                  <span className="text-[#ffb77d] font-bold">BEAT: {activeBeat.label}</span>
                  <span className="text-[#a0a4b0]">|</span>
                  <span className="text-[#a0a4b0]">{activeBeat.headline}</span>
                </div>
              </div>

              {/* Sleek Player Chrome Controls */}
              <div className="relative z-10 w-full pt-4">
                {/* Scrub Bar with Solar Orange Playhead */}
                <div
                  onClick={handleScrub}
                  className="relative w-full h-2 bg-[#343538] rounded-full overflow-hidden mb-4 cursor-pointer group/bar"
                  title="Click to scrub timeline"
                >
                  <div
                    className="h-full bg-[#ff6b00] rounded-full relative transition-all duration-75"
                    style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                  >
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md border border-[#ff6b00]" />
                  </div>
                </div>

                <div className="flex items-center justify-between font-space text-xs text-[#a0a4b0]">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handlePlayPause}
                      className="hover:text-[#ffb693] transition-colors cursor-pointer"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {isPlaying ? 'pause' : 'play_arrow'}
                      </span>
                    </button>
                    <button
                      onClick={toggleSound}
                      className="hover:text-[#ffb693] transition-colors cursor-pointer"
                      title={isMuted ? 'Unmute' : 'Mute'}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {isMuted ? 'volume_off' : 'volume_up'}
                      </span>
                    </button>
                    <span className="text-[11px] tabular-nums font-mono text-[#e3e2e6]">
                      {formatTimestamp(currentTime)} / 00:15.00
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-1.5 py-0.5 rounded-sm bg-[#292a2d] text-[10px] text-[#ff6b00] font-bold">
                      60 FPS
                    </span>
                    <button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="hover:text-[#ffb693] transition-colors cursor-pointer"
                      title="Toggle Fullscreen"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reel Specifications & Strategic Blueprint */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="font-space text-xs font-bold text-[#ff6b00] tracking-widest uppercase mb-2">
              MOTION DELIVERABLE: REEL-01
            </div>
            <h3 className="font-space text-2xl md:text-3xl text-[#e3e2e6] font-medium leading-snug">
              RADIANZZ: 15-Second Kinetic Brand & All-Services Reel
            </h3>

            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-space text-xs uppercase text-[#ffb77d] tracking-wider mb-1 font-semibold">
                  Detailed Description
                </h4>
                <p className="text-sm md:text-base text-[#a0a4b0] leading-relaxed">
                  A rapid-fire, high-velocity 15-second kinetic video showcase designed for Instagram
                  Reels and digital ad feeds. Built to cycle through RADIANZZ core disciplines
                  (UI/UX Transformation, Headless Engineering, AI Automation, Conversion CRO) in
                  3.75-second synchronized visual beats with micro-haptic transitions.
                </p>
              </div>
              <div className="pt-2">
                <h4 className="font-space text-xs uppercase text-[#ffb77d] tracking-wider mb-1 font-semibold">
                  Campaign Metrics
                </h4>
                <p className="text-sm md:text-base text-[#a0a4b0] leading-relaxed">
                  Engineered for &gt;82% 3-second hook retention and direct swipe-up attribution.
                </p>
              </div>
            </div>
          </div>

          {/* Beat breakdown timeline - Interactive Jump Buttons */}
          <div className="mt-8 pt-6 border-t border-[#3a322d]/30">
            <div className="flex items-center justify-between mb-2">
              <span className="font-space text-xs text-[#a0a4b0] uppercase tracking-wider font-semibold">
                Interactive Sequence Beats:
              </span>
              <span className="text-[11px] text-[#ff6b00] font-space">Click beat to jump</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              {REEL_BEATS.map((beat) => {
                const isActive = activeBeat.id === beat.id;
                return (
                  <button
                    key={beat.id}
                    onClick={() => handleJumpToBeat(beat)}
                    className={`p-2.5 rounded-sm border transition-all cursor-pointer text-left ${
                      isActive
                        ? 'bg-[#292a2d] border-[#ff6b00] shadow-md shadow-[#ff6b00]/10 scale-105'
                        : 'bg-[#1b1b1f] border-[#3a322d]/40 hover:border-[#ff6b00]/40'
                    }`}
                  >
                    <span
                      className={`font-space text-[10px] block font-bold ${
                        isActive ? 'text-[#ff6b00]' : 'text-[#ffb693]'
                      }`}
                    >
                      {beat.timeRange}
                    </span>
                    <span className="font-space text-[9px] text-[#e3e2e6] uppercase block truncate font-medium">
                      {beat.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
