import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_VIDEO_CURRENT_TIME = 'videoplayer-current-time';
const throttledOnTimeUpdate = throttle(onTimeUpdate, 1000);
const player = new Player('vimeo-player');

if (localStorage[STORAGE_VIDEO_CURRENT_TIME]) {
  player.setCurrentTime(localStorage[STORAGE_VIDEO_CURRENT_TIME]);
}

player.on('timeupdate', throttledOnTimeUpdate);

function onTimeUpdate(evt) {
  localStorage.setItem(STORAGE_VIDEO_CURRENT_TIME, evt.seconds);
}
