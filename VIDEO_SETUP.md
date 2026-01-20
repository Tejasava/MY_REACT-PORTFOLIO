# How to Add Your Introduction Video

## Setup Instructions

The profile photo component is now configured to play an introduction video when you hover over it. Follow these steps:

### Step 1: Prepare Your Video
- Create or record your introduction video (recommended: 10-20 seconds)
- Export it as an MP4 file for best compatibility
- **IMPORTANT: Keep file size under 10MB** (GitHub has 100MB limit, but smaller = faster loading)
- Optimize the video:
  - Resolution: 720p recommended
  - File size: **Under 10MB is ideal** (use compression below)
  - Format: MP4 (h.264 codec)
  - Audio: Included (with audio now enabled!)

### Step 2: Add Video to Project
1. Place your video file in the `public` folder with the name `intro-video.mp4`
   ```
   public/
   ├── favicon.ico
   ├── robots.txt
   ├── placeholder.svg
   └── intro-video.mp4  ← Add your video here
   ```

**Note:** Video files are automatically ignored by git (see `.gitignore`), so they won't be committed to your repository. This prevents large files from bloating your GitHub repo.

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
**Audio is now ENABLED by default!** Your video will play with sound when users hover over the profile photo.

If you want to disable audio later, you can add `muted` back to the video tag:
```tsx
<video ref={videoRef} loop muted playsInline>
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
# Convert and optimize video (RECOMMENDED - Creates ~5-10MB file with audio)
ffmpeg -i your-video.mov -c:v libx264 -preset slow -crf 28 -c:a aac -q:a 5 intro-video.mp4

# For smaller file size (lower quality but faster loading)
ffmpeg -i your-video.mov -c:v libx264 -preset fast -crf 32 -c:a aac -q:a 6 intro-video.mp4

# For best quality (larger file, make sure it's under 10MB)
ffmpeg -i your-video.mov -c:v libx264 -preset slow -crf 23 -c:a aac -q:a 4 intro-video.mp4
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
