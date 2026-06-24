# Avatar Assets

Place Junayed's reference photos and 3D avatar model here.

## Reference Photos (for avatar generation)

```
reference-front.jpg   — neutral front-facing photo
reference-side.jpg    — side profile
reference-smile.jpg   — smiling expression
```

## Final Avatar Model

```
junayed-avatar.glb    — the generated 3D avatar model
```

## Recommended Avatar Generation Tools

- **Ready Player Me** — readyplayer.me (photo-to-avatar, free, GLB export)
- **Avaturn** — avaturn.me (realistic, photo-based, GLB export)
- **Meshy** — meshy.ai (AI 3D generation)
- **Spline** — spline.design (3D design tool with export)
- **MetaHuman + Blender** — for highest quality, most work required

## Avatar Requirements

The final avatar should:
- Resemble Junayed's face (use reference photos)
- Wear smart casual attire or a blazer
- Have a friendly, professional expression
- Include animation clips: `wave`, `idle`, `lookAtCursor`
- Be exported in GLB format

## Integration

Once the GLB file is ready:
1. Replace `assets/avatar/junayed-avatar.glb`
2. In `index.html`, replace the `<img>` tag inside `#avatar-container` with a `<canvas id="avatar-canvas">`
3. See the Three.js integration comment block at the bottom of `index.html`
