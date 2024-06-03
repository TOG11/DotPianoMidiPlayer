# This script is NOT maintained!
# As of Feb 2024 it still works, however bugs will NOT be fixed.


# Dot Piano Midi Player
A script that allows you to play custom .mid files through https://dotpiano.com

### Download <a href="https://github.com/TOG11/DotPianoMidiPlayer/releases/tag/V3.0.0">script.js<a> in releases

# Getting The Midi File To Play & How The Midi Tracks Work
find a midi file with **ONE TRACK ONLY** If the midi file has more than **1** **track** in it, the script will auto set to play track 1. <br>
**currently you cannot play multiple midi tracks.** <br><br>
if you would like to switch the midi tracks the script plays on, then at the top of script.js, look for, 
```node 
const midiTrack = 1 //<-CHANGE THIS NUMBER TO THE TRACK NUMBER YOU WANT TO PLAY 
```
most of the time you want track 1, however for advanced users i added this setting to the script. <br>
<br> in V3 we added the ability to change midi tempos, to do this go into your config at the top of Script.js and look for,
 ```node
 const tempo = 60
 ``` 
 <br> here change the tempo. higher is faster, lower is slower. 60 is base, about 120 BPM.
                            

# Upload Midi Files To Server                                
 After you have found your midi file, we need to upload it to a File Server/API with CORS enabled.
 Copy the download link, and put into as the fileurl var in the main script.<br>
 go to the config for script.js (at the top of script.js) and paste it here,
 ```node
  const fileurl = 'DownloadLinkGoesHere'
  ```
  
  Your config should look somthing like this afterwards, 
  ```node
//CONFIG

//the url of the midi file, the site that hosts this file MUST have cors enabled!
const fileurl = 'FILE URL HERE'

//control midi file tempo (for most songs you want 60, however the ussual change is somtimes required) 
//!!THIS IS NOT BPM, LOWER IS SLOWER, HIGHER IS FASTER!!
const tempo = 60

//the track of the midi file to play. only one track can be played currently.

const midiTrack = 1

//END OF CONFIG
  
  ```
 # Running Our Script (Chrome)                             
   After script.js is configured,<br> go to 
  ### https://dotpiano.com/
  and go to the "Listen" tab.
  <br>
  <br>
  **IMPORTANT: Pause the current playing paino song** <br><br>
  Press F12 on your keyboard, this should open the Developer Menu. 
  <br> Then go to the "Console" Tab at the top of the Menu. <br>
  copy the configured script code, and then paste it into the Console. (**Dependning on the speed of your PC this could take a moment**) <br>
  After its been pasted into the Console, press Enter. <br>
  This should load your midi into Dotpiano <br>
  <br>
  **IF YOU GET A "forEach" ERROR PLEASE RELOAD THE  PAGE AND TRY AGAIN! <br> (im not sure what the culprit of this error is, but i think it has somthing to do with the midi being over 2mins.**

  <br> <br> <br>
  **I am in no way affiliated with https://dotpiano.com, all rights to https://github.com/tambien for the amazing website!**
  <br>
  <br>                  

  # Running Our Script (Safari Desktop)   
   In safari, Open safari settings (⌘ + ,)
   Go to the advanced tab
   Click "Show Features for Web Developers"
   go to 
  ### https://dotpiano.com/
  and go to the "Listen" tab.
  <br>
  <br>
  **IMPORTANT: Pause the current playing paino song** <br><br>
  Press ⌥ + ⌘ + I on your keyboard, this should open the Developer Menu. 
  <br> Then go to the "Console" Tab at the top of the Menu. <br>
  copy the configured script code, and then paste it into the Console. (**Dependning on the speed of your Mac this could take a moment**) <br>
  After its been pasted into the Console, press Enter. <br>
  This should load your midi into Dotpiano <br>
  <br>
  **IF YOU GET A "forEach" ERROR PLEASE RELOAD THE  PAGE AND TRY AGAIN! <br> (im not sure what the culprit of this error is, but i think it has somthing to do with the midi being over 2mins.**
