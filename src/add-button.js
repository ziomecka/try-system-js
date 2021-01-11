export function addButton() {
  const button = document.createElement('button')
  button.textContent = 'button'

  button.addEventListener('click', () => document.body.append('appended text '))
  document.body.appendChild(button)
}