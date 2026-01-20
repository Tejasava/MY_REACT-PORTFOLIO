# Video Setup Guide - Complete Instructions

## ⚠️ Important: The video feature is now ready, but the video file is NOT included in the repository

The `intro-video.mp4` file is intentionally **NOT committed to GitHub** to keep your repository size manageable. You must add your own video file locally.

---

## 🎬 Quick Setup (5 minutes)

### Step 1: Prepare Your Video
Record or prepare your introduction video:
- **Duration**: 10-20 seconds (recommended)
- **Format**: MP4 (H.264 video codec)
- **Resolution**: 720p is ideal (1280x720)
- **File Size**: **MUST be under 10MB** for good performance
- **Audio**: Include audio if desired (no longer muted!)

### Step 2: Compress Your Video (Required!)

If your video is larger than 10MB, compress it using one of these methods:

#### Option A: Using FFmpeg (Command Line)
```bash
# High quality (good balance, ~5-8MB)
ffmpeg -i your-video.mov -c:v libx264 -preset slow -crf 28 -c:a aac -q:a 5 intro-video.mp4

# Medium quality (smaller file, ~3-5MB)
ffmpeg -i your-video.mov -c:v libx264 -preset medium -crf 32 -c:a aac -q:a 6 intro-video.mp4

# Smaller file (fastest compression, ~2-3MB)
ffmpeg -i your-video.mov -c:v libx264 -preset fast -crf 35 -c:a aac -q:a 8 intro-video.mp4
```

#### Option B: Using Online Tools
- **CloudConvert**: https://cloudconvert.com (Upload MOV, download as MP4)
- **Convertio**: https://convertio.co (Free online converter)
- **HandBrake**: https://handbrake.fr (Free desktop app)

#### Option C: Using Mac QuickTime
1. Open QuickTime Player
2. File → Open
3. Select your video
4. File → Export As
5. Format: MP4, Quality: Medium/High
6. Save as `intro-video.mp4`

### Step 3: Add Video to Project
```bash
# Copy your compressed video to the public folder
cp /path/to/your/intro-video.mp4 public/intro-video.mp4
```

Or manually:
1. Navigate to your project folder
2. Open the `public/` directory
3. Paste your `intro-video.mp4` file here

### Step 4: Test Locally
```bash
npm run dev
```

Then:
1. Open http://localhost:5173 in your browser
2. **Hover over the profile photo** at the bottom
3. You should see the video with audio playing!
4. Move your cursor away to stop the video

---

## ✅ How to Verify It's Working

### Check Browser Console
1. Open DevTools: Press **F12**
2. Go to **Console** tab
3. You should see: `"Video ready to play"` when hovering
4. If you see errors, note them and follow the troubleshooting section below

### Test the Video Path
1. In browser address bar, visit: `http://localhost:5173/intro-video.mp4`
2. The browser should either:
   - Download the file, OR
   - Show a video player

If neither happens, the file path is wrong.

---

## 🐛 Troubleshooting

### Problem: Video doesn't play / Shows "Add your video" message

**Solution:**
- Check that `intro-video.mp4` is in the `public/` folder (not `src/assets/`)
- File must be named exactly `intro-video.mp4` (lowercase, .mp4 extension)
- Try hard refresh: **Ctrl+Shift+R** (Windows/Linux) or **Cmd+Shift+R** (Mac)

### Problem: Video plays but no audio

**Solution 1:** Video file doesn't have audio track
- Re-encode with audio using FFmpeg command above

**Solution 2:** Browser has muted the tab
- Click the speaker icon on your browser tab to unmute

**Solution 3:** Video is muted in code
- Check `HeroSection.tsx` - video should NOT have `muted` attribute
- It should show: `muted={false}`

### Problem: Video quality is terrible

**Solution:**
- Use the FFmpeg command with `-crf 23` instead of 28 (lower number = higher quality)
- Increase resolution to 1080p instead of 720p

### Problem: Video file is too large (> 100MB)

**Solution:**
- Don't push it to GitHub! The `.gitignore` already excludes it
- Compress using FFmpeg with higher CRF value (28-35)
- Reduce resolution to 720p or lower
- Reduce duration to 10-15 seconds

### Problem: Browser console shows error like "Cross-Origin" or "CORS"

**Solution:**
- This is rare since it's a same-origin resource
- Try clearing browser cache and hard refresh
- Update to latest browser version

---

## 🎯 File Structure

After adding your video, your project should look like:
```
public/
├── favicon.ico
├── robots.txt
├── placeholder.svg
└── intro-video.mp4  ← Your video file here
```

The `intro-video.mp4` file:
- ✅ IS committed to your local git (you can see it with `git status`)
- ❌ IS NOT pushed to GitHub (ignored by `.gitignore`)
- ✅ WILL be used locally when you run `npm run dev`

---

## 💡 Pro Tips

1. **Always compress before testing** - Large files load slowly and you can't push them to GitHub

2. **Use the same intro video dimensions as your profile frame** - If your video is 16:9, it will be letterboxed or zoomed

3. **Test on mobile** - Hover doesn't work on mobile, consider adding a click event for mobile users

4. **Add background music** - Include subtle background music in your video for better engagement

5. **Keep it professional** - Keep your intro under 20 seconds, directly related to your portfolio

---

## 🚀 Deploying to Production

When you deploy to platforms like Vercel, Netlify, etc.:

1. **Add your video file before deployment**
   ```bash
   cp your-video.mp4 public/intro-video.mp4
   ```

2. **Deploy normally**
   ```bash
   vercel deploy  # or your platform's deploy command
   ```

3. **The video will be deployed** as part of the public assets

---

## 📞 Still Having Issues?

1. Check browser console (F12 → Console tab) for specific errors
2. Verify file path: `http://localhost:5173/intro-video.mp4` should download/play
3. Ensure file is named exactly: `intro-video.mp4`
4. Make sure file is in `public/` folder (not `src/` or other locations)
5. Try a different video file to rule out corruption

---

**Last updated**: January 20, 2026

Enjoy your new portfolio! 🎉
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
