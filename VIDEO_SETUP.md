# How to Add Your Introduction Video

## Setup Instructions

The profile photo component is now configured to play an introduction video when you hover over it. Follow these steps:

### Step 1: Prepare Your Video
- Create or record your introduction video (recommended: 10-20 seconds)
- Export it as an MP4 file for best compatibility
- Optimize the video:
  - Resolution: 720p or 1080p
  - File size: Keep it under 10-15MB for fast loading
  - Format: MP4 (h.264 codec)
  - Audio: Optional (can include audio or keep muted)

### Step 2: Add Video to Project
1. Place your video file in the `public` folder with the name `intro-video.mp4`
   ```
   public/
   ├── favicon.ico
   ├── robots.txt
   ├── placeholder.svg
   └── intro-video.mp4  ← Add your video here
   ```

### Step 3: How It Works
- The video will automatically play when you hover over the profile photo
- The profile image will fade out and the video will fade in
- When you move your cursor away, the video stops and resets
- The video loops continuously while hovering
- A "Hover to see intro" indicator appears on hover

### Step 4: Customization (Optional)

If you want to customize the video behavior, you can modify the `HeroSection.tsx`:

#### Option A: Auto-play video on page load
Replace this line in the `handleMouseEnter` function:
```tsx
if (videoRef.current) {
  videoRef.current.play();
}
```

#### Option B: Enable audio in video
Change the video tag from:
```tsx
<video ref={videoRef} loop muted playsInline>
```
to:
```tsx
<video ref={videoRef} loop playsInline>
```

#### Option C: Change transition speed
Modify this className if you want faster/slower fade:
```tsx
className={`... transition-opacity duration-300 ...`}
                              // ↑ change 300 to 500 for slower fade
```

### Step 5: Test
1. Run `npm run dev`
2. Hover over the profile photo to see the video play
3. Move your cursor away to stop the video

### Video File Optimization Tips

**Using FFmpeg** (command line):
```bash
# Convert and optimize video
ffmpeg -i your-video.mov -c:v libx264 -preset medium -crf 23 -c:a aac -q:a 4 intro-video.mp4

# Or for smaller file size (lower quality):
ffmpeg -i your-video.mov -c:v libx264 -preset fast -crf 28 -c:a aac -q:a 4 intro-video.mp4
```

**Online Tools**:
- CloudConvert (https://cloudconvert.com)
- HandBrake (https://handbrake.fr)
- Shotcut (free video editor)

### Troubleshooting

**Video not playing?**
- Ensure the file is named exactly `intro-video.mp4`
- Check that it's in the `public` folder (not `src/assets`)
- Try refreshing the page (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)

**Video is too large?**
- Reduce resolution to 720p
- Reduce video length to 10-15 seconds
- Use higher compression (CRF value of 28-32 in FFmpeg)

**Audio not working?**
- Remove the `muted` attribute from the video tag in `HeroSection.tsx`
- Ensure your browser hasn't muted the tab (check tab audio icon)

### Browser Compatibility

The current setup supports:
- Chrome/Edge (Full support)
- Firefox (Full support)
- Safari (Full support)
- Mobile browsers (Touch-friendly with `playsInline`)

---

**Need help?** Refer to the updated `HeroSection.tsx` component in `src/components/`.
