import PaperRipple from './paperRipple/PaperRipple.js'
const btns = document.querySelectorAll('.ripple')
btns.forEach(btn => {
	new PaperRipple(btn)
})
