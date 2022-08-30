export default function PaperRipple(rippleBtn) {
	rippleBtn.forEach(btn => {
		const div = document.createElement('div')
		div.setAttribute('data-waves-container', '')
		btn.appendChild(div)

		btn.addEventListener('pointerdown', e => {
			if (e.buttons == 1) {
				btn.setPointerCapture(e.pointerId)
				const coordinateProperties = btn.getBoundingClientRect()

				const { x, y } = coordinateProperties
				const offsets = {
					x: `${e.clientX - x}px`,
					y: `${e.clientY - y}px`,
				}

				btn.addEventListener('pointerup', handlePointerUp, { once: true })

				function handlePointerUp(e) {
					clearTimeout(timer)
					createWavesOnPointerDown(offsets, div, btn)
				}

				let timer = setTimeout(() => {
					createWavesOnPointerLong(offsets, div, btn)
					btn.removeEventListener('pointerup', handlePointerUp, { once: true })
				}, 180)
			}
		})
		btn.addEventListener('keydown', e => {
			if (e.repeat) return
			switch (e.key) {
				case 'Enter':
				case ' ':
					btn.scrollIntoView({ block: 'nearest' })

					const offsets = {
						x: `50%`,
						y: `50%`,
					}

					btn.addEventListener('keyup', handleKeyboardPress, { once: true })

					function handleKeyboardPress(e) {
						clearTimeout(timer)
						createWavesOnPointerDown(offsets, div, btn)
					}
					let timer = setTimeout(() => {
						createWavesOnKeyboardrLong(offsets, div, btn)
						btn.removeEventListener('keyup', handleKeyboardPress, false)
					}, 200)
					break

				default:
					break
			}
		})
	})

	function createWavesOnPointerDown(offsets, parentElement, btn) {
		const { x, y } = offsets

		const waves = document.createElement('div')
		waves.style.setProperty('--x', `${x}`)
		waves.style.setProperty('--y', `${y}`)
		waves.setAttribute('data-waves', '')
		waves.setAttribute('data-animate-waves', '')
		parentElement.appendChild(waves)
		waves.addEventListener(
			'animationend',
			e => {
				waves.remove()
			},
			{ once: true }
		)
	}
	function createWavesOnPointerLong(offsets, parentElement, btn) {
		const { x, y } = offsets

		const waves = document.createElement('div')
		waves.style.setProperty('--x', `${x}`)
		waves.style.setProperty('--y', `${y}`)
		waves.setAttribute('data-waves', '')
		waves.setAttribute('data-animate-waves-long', '')
		parentElement.appendChild(waves)
		btn.addEventListener(
			'pointerup',
			e => {
				waves.setAttribute('data-animate-waves-llopacity', '')

				waves.addEventListener(
					'animationend',
					e => {
						waves.remove()
					},
					{ once: true }
				)
			},
			{ once: true }
		)
		btn.addEventListener(
			'blur',
			e => {
				waves.setAttribute('data-animate-waves-llopacity', '')

				waves.addEventListener(
					'animationend',
					e => {
						waves.remove()
					},
					{ once: true }
				)
			},
			{ once: true }
		)
	}
	function createWavesOnKeyboardrLong(offsets, parentElement, btn) {
		const { x, y } = offsets

		const waves = document.createElement('div')
		waves.style.setProperty('--x', `${x}`)
		waves.style.setProperty('--y', `${y}`)
		waves.setAttribute('data-waves', '')
		waves.setAttribute('data-animate-waves-long', '')
		parentElement.appendChild(waves)
		btn.addEventListener(
			'keyup',
			e => {
				waves.setAttribute('data-animate-waves-llopacity', '')
				waves.addEventListener(
					'animationend',
					e => {
						waves.remove()
					},
					{ once: true }
				)
			},
			{ once: true }
		)
		btn.addEventListener(
			'blur',
			e => {
				waves.setAttribute('data-animate-waves-llopacity', '')
				waves.addEventListener(
					'animationend',
					e => {
						waves.remove()
					},
					{ once: true }
				)
			},
			{ once: true }
		)
	}
}
