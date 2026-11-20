# GTA 6 Clipper — Lucia Points, the Car Explodes

[![GTA 6 Clipper](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/iwannwinn/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/iwannwinn/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A 17.5-second vertical Short (1080x1920) cut for make.fun's
gta6-clipper-01 bounty, where places go by YouTube views. The video
goes up Public on YouTube as a Short; its description carries the
bounty's line and the play code.

## The clip

One continuous stretch of Rockstar Games' Grand Theft Auto VI Trailer 2
(the official trailer on Rockstar's YouTube channel), from 1:51 to
2:02 of the trailer: Lucia points her gun at the camera in golden-hour
Vice City, the nightclub, a street fight, then a car explodes and flips
in flames in front of two police cars, and a getaway truck drives off
into the night. No finished clip was reused — the trailer was fetched
in the build session and cut with ffmpeg.

## Why it hooks

Frame one is Lucia's face and her gun, in golden light, unmistakably
GTA 6. The fire lands seven seconds in, so a viewer who stays past the
first swipe gets the explosion. The getaway truck closes the moment
instead of letting it trail off.

## The pitch

The GTA moment runs clean for 11.5 seconds, then the clip cuts to a
6-second end card over the trailer's neon VI logo:

- first 3 seconds: "Make clips like this with AI and earn money on make.fun"
- last 3 seconds: "make.fun/bounty/gta6-clipper-01"

Both lines are big white and yellow bold text, centred in the vertical
safe area, clear of YouTube's buttons.

## The entry

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory. `VIDEO.json` holds the
placeholder address until the video is uploaded, then it is replaced
with the real Short URL before submitting.
