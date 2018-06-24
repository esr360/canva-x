import { Synergy } from 'Synergy';
import defaults from './editorPane.json';

export default function editorPane(custom) {
    Synergy('editorPane', (editorPane, options) => {
        const dragSource = Synergy('editorNav').component('pane')[0];
        const dropSource = editorPane.component('grid')[0];
        const galleryImages = dragSource.children;

        [...galleryImages].forEach(image => {
            image.addEventListener('dragstart', dragToCanvasFromGallery, false);
            image.addEventListener('drop', dropOnCanvasFromGallery, false);
        });

        /**
         * Set up a variable to store the currently dragged element's source
         */
        var dragSrcEl = null;
        
        /**
         * Initial drag event from left hand gallery
         */
        function dragToCanvasFromGallery(event) {
            dragSrcEl = event.target;

            editorPane.addEventListener('dragover', handleDragOver, false);
            editorPane.addEventListener('drop', dropOnCanvasFromGallery, false);
        }
        
        /**
         * Initial drop event onto the canvas from the gallery
         */
        function dropOnCanvasFromGallery(event) {
            const item = document.createElement('div');

            item.classList.add('editorPane_item');
            item.setAttribute('data-component', 'item');
            item.append(dragSrcEl.cloneNode(true));
            dropSource.append(item);

            editorPane.removeEventListener('drop', dropOnCanvasFromGallery, false);
            item.addEventListener('dragstart', dragOnCanvas, false);

            if (item.parentNode.childNodes.length > 4) {
                console.log(item.parentNode.childNodes);
            }
        }

        /**
         * Once item has been dropped onto the canvas, allow it to be
         * dragged within the canvas to re-arrange it
         */
        function dragOnCanvas(event) {
            dragSrcEl = event.target.closest('[data-component');

            event.dataTransfer.setData('text/html', dragSrcEl.innerHTML);

            editorPane.addEventListener('drop', dropOnCanvas, false);
        }

        /**
         * Handle the event from a rearrange drop
         */
        function dropOnCanvas(event) {
            const target = event.target.closest('[data-component');

            if (dragSrcEl != target) {
                dragSrcEl.innerHTML = target.innerHTML;
                target.innerHTML = event.dataTransfer.getData('text/html');
            }
    
            editorPane.removeEventListener('drop', dropOnCanvas, false);
        }
        
        /**
         * Handle the general drag-over event
         */
        function handleDragOver(event) {
            event.preventDefault();
        }
    }, defaults, custom);
}