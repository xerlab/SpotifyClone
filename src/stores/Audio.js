import { defineStore } from 'pinia'
import artist from '../artist.json'

export const useAudioStore = defineStore('Audio', {
  state: () => ({
    playing:false,
    audio:null,
    currentArtist:null,
    currentTrack:null
  }),
  actions: {
    loadAudio(artist,track){
      if(this.audio && this.audio.src){
        this.audio.pause()    
        this.playing = false
        this.audio.src = ''
      }
      this.currentArtist = artist
      this.currentTrack = track

      this.audio = new Audio()
      this.audio.src = track.path

      setTimeout(()=> {
        this.audio.play()
        this.playing = true
      },300)
    },

    playpauseAudio(){
      this.audio.paused ? this.audio.play() : this.audio.pause()
      this.playing = !this.playing
    },

    playpauseThisAudio(artist,track){
      if(!this.audio || !this.audio.src || (this.currentTrack.id !== track.id)){
        this.loadAudio(artist,track) 
        return 
      }
      this.playpauseAudio()
    },

    prevAudio(currentTrack){
      let track = artist.tracks[currentTrack.id -2]
      this.loadAudio(artist,track)
    },

    nextAudio(currentTrack){
      let track = artist.tracks[currentTrack.id % artist.tracks.length]
      this.loadAudio(artist,track)
    },

    playFirst(){
      this.resetState()
      let track = artist.tracks[0]
      this.loadAudio(artist,track)
    },

    resetState(){
      this.playing = false
      this.audio = null
      this.currentArtist = null
      this.currentTrack = null
    }
  }
})
