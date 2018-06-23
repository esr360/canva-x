import { Synergy } from 'Synergy';
import defaults from './editorPane.json';

export default function editorPane(custom) {
    Synergy('editorPane', (editorPane, options) => {
        const dragSource = Synergy('editorNav').component('pane')[0];
        const dropSource = editorPane.component('canvas')[0];
        const galleryImages = dragSource.children;

        editorPane.addEventListener('dragover', handleDragOver, false);
        editorPane.addEventListener('drop', handleDrop, false);

        [...galleryImages].forEach(image => {
            image.addEventListener('dragstart', handleDragStart, false);
            image.addEventListener('dragover', handleDragOver, false);
            image.addEventListener('drop', handleDrop, false);
        });
    }, defaults, custom);
}

var dragSrcEl = null;

function handleDragStart(event) {
    dragSrcEl = event.target;

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', event.target.innerHTML);
}

function handleDragOver(event) {
    event.preventDefault();
  
    event.dataTransfer.dropEffect = 'move';
}

function handleDrop() {
    const clone = dragSrcEl.cloneNode(true);

    document.querySelector('.editorPane_canvas').append(clone);
}