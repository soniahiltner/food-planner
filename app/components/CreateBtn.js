export function CreateBtn( clase, content ) {

    const $button = document.createElement('button');
    $button.classList.add(clase);
    $button.textContent = content;

    
    return $button;
}