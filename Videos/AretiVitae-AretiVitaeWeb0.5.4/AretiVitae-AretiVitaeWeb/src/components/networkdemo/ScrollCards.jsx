// ScrollCards.jsx
import * as THREE from 'three'
import { useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import styles from './modules/ScrollCards.module.css'

const CARDS = [
  {
    tag: 'Expansão',
    title: 'MoonModules',
    description:
      'Os MoonModules são pacotes de expansão pagos através de uma assinatura para os usuários do AretiVitae no navegador — módulos que expandem ainda mais a imersão do usuário dentro da plataforma.',
    side: 'left',
    titleSize: { desktop: '58px', tablet: '44px', mobile: '38px' },
    isList: false,
    contact: 'aretivitae@gmail.com',
    ctaLabel: 'Voltar',
    ctaHref: '/home',
  },
  {
    tag: 'Módulo I',
    title: 'Hécate',
    symbol: '/symbols/hecate.webp',
    price: 'R$8.90',
    items: [
      'Suporte para canvas 1.5x maior que o comum',
      'Limite aumentado para 4 mapas',
      '25 espaços para notas',
    ],
    side: 'right',
    titleSize: { desktop: '52px', tablet: '38px', mobile: '30px' },
    isList: true,
    ctaLabel: 'Assinar Hécate',
  },
  {
    tag: 'Módulo II',
    title: 'Artemis',
    symbol: '/symbols/Artemis.webp',
    price: 'R$17,90',
    items: [
      'Suporte para canvas 2x maior que o comum',
      'Limite aumentado para 6 mapas',
      '40 espaços para notas',
    ],
    side: 'left',
    titleSize: { desktop: '52px', tablet: '38px', mobile: '30px' },
    isList: true,
    ctaLabel: 'Assinar Artemis',
  },
  {
    tag: 'Módulo III',
    title: 'Selene',
    symbol: '/symbols/SeleneSymbol.webp',
    price: 'R$25,90',
    items: [
      'Suporte para canvas 2.8x maior que o comum',
      'Limite aumentado para 10 mapas',
      '50 espaços para notas',
      'Exportar em SVG'
    ],
    side: 'right',
    titleSize: { desktop: '52px', tablet: '38px', mobile: '30px' },
    isList: true,
    ctaLabel: 'Assinar Selene',
  },
]

const STAR_COUNT = 2026

const T = {
  cardBg:     'rgba(8, 12, 38, 0.72)',
  cardBorder: 'rgba(155, 185, 255, 0.16)',
  accent:     '#8ab0ff',
  accentB:    '#c4b5fd',
  text:       '#dde8ff',
  textDesc:   '#ffffff',
  shadow: [
    '0 0 0 1px rgba(155, 185, 255, 0.09)',
    '0 28px 60px rgba(0, 0, 24, 0.65)',
    'inset 0 1px 0 rgba(255, 255, 255, 0.055)',
  ].join(', '),
}

function bp() {
  const w = window.innerWidth
  if (w < 600) return 'mobile'
  if (w < 1024) return 'tablet'
  return 'desktop'
}

function cardWidth(b) {
  return { desktop: '560px', tablet: '420px', mobile: `${window.innerWidth * 0.88}px` }[b]
}

function cardPadding(b) {
  return { desktop: '52px 56px', tablet: '38px 42px', mobile: '30px 28px' }[b]
}

function createCardCTA(label, href) {
  const btn = document.createElement('button')
  Object.assign(btn.style, {
    display:              'inline-flex',
    alignItems:           'center',
    gap:                  '10px',
    marginTop:            '28px',
    padding:              '13px 32px',
    border:               '1px solid rgba(138,176,255,0.32)',
    borderRadius:         '50px',
    background:           'rgba(8,14,48,0.82)',
    backdropFilter:       'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    color:                T.text,
    fontFamily:           "'Montserrat', sans-serif",
    fontWeight:           '700',
    fontSize:             'clamp(0.7rem,1.4vh,0.88rem)',
    letterSpacing:        '0.12em',
    textTransform:        'uppercase',
    cursor:               'pointer',
    whiteSpace:           'nowrap',
    boxShadow:            '0 0 48px rgba(100,145,255,0.14), inset 0 1px 0 rgba(255,255,255,0.06)',
    transition:           'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease',
  })

  const dot = document.createElement('span')
  Object.assign(dot.style, {
    width:        '6px',
    height:       '6px',
    borderRadius: '50%',
    background:   T.accent,
    boxShadow:    `0 0 8px ${T.accent}`,
    flexShrink:   '0',
    animation:    'dotPulse 2.4s ease-in-out infinite',
  })
  btn.appendChild(dot)
  btn.appendChild(document.createTextNode(label))

  btn.addEventListener('mouseenter', () => {
    btn.style.background  = 'rgba(22,44,110,0.9)'
    btn.style.borderColor = 'rgba(138,176,255,0.55)'
    btn.style.boxShadow   = '0 0 70px rgba(100,145,255,0.28), inset 0 1px 0 rgba(255,255,255,0.09)'
    btn.style.transform   = 'translateY(-2px)'
  })
  btn.addEventListener('mouseleave', () => {
    btn.style.background  = 'rgba(8,14,48,0.82)'
    btn.style.borderColor = 'rgba(138,176,255,0.32)'
    btn.style.boxShadow   = '0 0 48px rgba(100,145,255,0.14), inset 0 1px 0 rgba(255,255,255,0.06)'
    btn.style.transform   = 'translateY(0)'
  })
  btn.addEventListener('mousedown', () => { btn.style.transform = 'translateY(0)' })

  if (href) {
    btn.addEventListener('click', () => { window.location.href = href })
  }

  return btn
}

function createCardElement(card) {
  const b      = bp()
  const isLeft = card.side === 'left'

  const el = document.createElement('div')
  Object.assign(el.style, {
    position:             'absolute',
    top:                  '50%',
    maxWidth:             '92vw',
    width:                cardWidth(b),
    padding:              cardPadding(b),
    background:           T.cardBg,
    border:               `1px solid ${T.cardBorder}`,
    borderRadius:         '26px',
    boxShadow:            T.shadow,
    backdropFilter:       'blur(28px) saturate(1.5)',
    WebkitBackdropFilter: 'blur(28px) saturate(1.5)',
    opacity:              '0',
    transition:           'opacity 0.72s cubic-bezier(0.22,1,0.36,1), transform 0.72s cubic-bezier(0.22,1,0.36,1)',
    pointerEvents:        'none',
    boxSizing:            'border-box',
    overflow:             'hidden',
    ...(b === 'mobile'
      ? { left: '50%', transform: 'translateY(-42%) translateX(-50%)' }
      : isLeft
        ? { left: '5vw', transform: 'translateY(-50%) translateX(-80px)' }
        : { right: '5vw', transform: 'translateY(-50%) translateX(80px)' }),
  })

  // top shimmer
  const shimmer = document.createElement('div')
  Object.assign(shimmer.style, {
    position:      'absolute',
    top:           '0',
    left:          '12%',
    width:         '76%',
    height:        '1px',
    background:    `linear-gradient(90deg, transparent, rgba(180,205,255,0.5) 40%, rgba(200,215,255,0.7) 50%, rgba(180,205,255,0.5) 60%, transparent)`,
    pointerEvents: 'none',
  })
  el.appendChild(shimmer)

  // accent bar
  const bar = document.createElement('div')
  Object.assign(bar.style, {
    position:   'absolute',
    top:        '18%',
    [isLeft ? 'left' : 'right']: '0',
    width:      '1px',
    height:     '64%',
    background: `linear-gradient(to bottom, transparent, ${T.accent} 35%, ${T.accentB} 65%, transparent)`,
    opacity:    '0.55',
    zIndex:     '1',
  })
  el.appendChild(bar)

  // inner
  const inner = document.createElement('div')
  Object.assign(inner.style, { position: 'relative', zIndex: '1' })

  // tag
  const tag = document.createElement('div')
  Object.assign(tag.style, {
    display:       'inline-block',
    fontFamily:    "'Montserrat', sans-serif",
    fontSize:      '9.5px',
    fontWeight:    '700',
    letterSpacing: '0.24em',
    textTransform: 'uppercase',
    color:         T.accent,
    background:    'rgba(138,176,255,0.09)',
    border:        '1px solid rgba(138,176,255,0.22)',
    borderRadius:  '50px',
    padding:       '4px 13px',
    marginBottom:  '18px',
  })
  tag.textContent = card.tag
  inner.appendChild(tag)

  // title row
  const titleRow = document.createElement('div')
  Object.assign(titleRow.style, {
    display:    'flex',
    alignItems: 'center',
    gap:        '12px',
    margin:     '0 0 14px',
  })

  if (card.symbol) {
    const sym = document.createElement('img')
    sym.src = card.symbol
    sym.alt = card.title
    Object.assign(sym.style, {
      width:      b === 'mobile' ? '44px' : '56px',
      height:     b === 'mobile' ? '44px' : '56px',
      objectFit:  'contain',
      flexShrink: '0',
      filter:     'brightness(1.15)',
      opacity:    '0.92',
    })
    titleRow.appendChild(sym)
  }

  const title = document.createElement('div')
  title.dataset.role = 'title'
  Object.assign(title.style, {
    fontFamily:    "'Cormorant Garamond', serif",
    fontWeight:    '600',
    fontSize:      card.titleSize[b],
    color:         T.text,
    lineHeight:    '1.12',
    letterSpacing: '0.01em',
  })
  title.textContent = card.title
  titleRow.appendChild(title)
  inner.appendChild(titleRow)

  // divider
  const divider = document.createElement('div')
  Object.assign(divider.style, {
    width:        '44px',
    height:       '1px',
    borderRadius: '10px',
    background:   `linear-gradient(90deg, ${T.accent}, ${T.accentB})`,
    marginBottom: '22px',
    opacity:      '0.75',
  })
  inner.appendChild(divider)

  // description
  if (card.isList) {
    const ul = document.createElement('ul')
    Object.assign(ul.style, {
      listStyle:     'none',
      padding:       '0',
      margin:        '0',
      display:       'flex',
      flexDirection: 'column',
      gap:           '12px',
    })
    card.items.forEach((text) => {
      const li = document.createElement('li')
      Object.assign(li.style, {
        color:         T.textDesc,
        fontFamily:    "'Montserrat', sans-serif",
        fontWeight:    '400',
        fontSize:      b === 'mobile' ? '13px' : b === 'tablet' ? '15px' : '16px',
        lineHeight:    '1.85',
        letterSpacing: '0.02em',
        display:       'flex',
        alignItems:    'baseline',
        gap:           '10px',
      })
      const dot = document.createElement('span')
      Object.assign(dot.style, { color: T.accent, fontSize: '0.65em', flexShrink: '0' })
      dot.textContent = '◈'
      li.appendChild(dot)
      li.appendChild(document.createTextNode(text))
      ul.appendChild(li)
    })
    inner.appendChild(ul)
  } else {
    const desc = document.createElement('p')
    Object.assign(desc.style, {
      color:         T.textDesc,
      fontFamily:    "'Montserrat', sans-serif",
      fontWeight:    '400',
      fontSize:      b === 'mobile' ? '13px' : b === 'tablet' ? '15px' : '16px',
      lineHeight:    '1.9',
      letterSpacing: '0.02em',
      margin:        '0',
    })
    desc.textContent = card.description
    inner.appendChild(desc)
  }

  // price block
  if (card.price) {
    const priceRow = document.createElement('div')
    Object.assign(priceRow.style, {
      display:    'flex',
      alignItems: 'baseline',
      gap:        '6px',
      marginTop:  '22px',
    })

    const priceVal = document.createElement('span')
    Object.assign(priceVal.style, {
      fontFamily:    "'Cormorant Garamond', serif",
      fontWeight:    '700',
      fontSize:      b === 'mobile' ? '32px' : '40px',
      color:         T.text,
      lineHeight:    '1',
      letterSpacing: '-0.02em',
    })
    priceVal.textContent = card.price

    const priceSub = document.createElement('span')
    Object.assign(priceSub.style, {
      fontFamily:    "'Montserrat', sans-serif",
      fontWeight:    '400',
      fontSize:      b === 'mobile' ? '12px' : '14px',
      color:         'rgba(180,205,255,0.6)',
      letterSpacing: '0.04em',
    })
    priceSub.textContent = 'por mês'

    priceRow.appendChild(priceVal)
    priceRow.appendChild(priceSub)
    inner.appendChild(priceRow)
  }

  // contact info
  if (card.contact) {
    const contactRow = document.createElement('div')
    Object.assign(contactRow.style, {
      marginTop:  '28px',
      display:    'flex',
      alignItems: 'center',
      gap:        '8px',
    })

    const contactLabel = document.createElement('span')
    Object.assign(contactLabel.style, {
      fontFamily:    "'Montserrat', sans-serif",
      fontWeight:    '700',
      fontSize:      b === 'mobile' ? '11px' : '12px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color:         T.accent,
    })
    contactLabel.textContent = 'Contato:'

    const contactValue = document.createElement('a')
    contactValue.href = `mailto:${card.contact}`
    Object.assign(contactValue.style, {
      fontFamily:     "'Montserrat', sans-serif",
      fontWeight:     '400',
      fontSize:       b === 'mobile' ? '12px' : '14px',
      letterSpacing:  '0.04em',
      color:          T.textDesc,
      textDecoration: 'none',
      transition:     'color 0.2s ease',
    })
    contactValue.textContent = card.contact
    contactValue.addEventListener('mouseenter', () => { contactValue.style.color = T.accent })
    contactValue.addEventListener('mouseleave', () => { contactValue.style.color = T.textDesc })

    contactRow.appendChild(contactLabel)
    contactRow.appendChild(contactValue)
    inner.appendChild(contactRow)
  }

  if (card.ctaLabel) {
    const btn = createCardCTA(card.ctaLabel, card.ctaHref ?? null)

    if (card.ctaHref) {
      Object.assign(btn.style, {
        marginTop:   '20px',
        background:  'rgba(100, 180, 255, 0.18)',
        border:      '1px solid rgba(130, 200, 255, 0.65)',
        color:       '#b8e0ff',
        boxShadow:   '0 0 32px rgba(100,190,255,0.22), inset 0 1px 0 rgba(255,255,255,0.10)',
      })

      const dot = btn.querySelector('span')
      if (dot) {
        dot.style.background = '#7dd4fc'
        dot.style.boxShadow  = '0 0 8px #7dd4fc'
      }

      btn.addEventListener('mouseenter', () => {
        btn.style.background  = 'rgba(100, 180, 255, 0.32)'
        btn.style.borderColor = 'rgba(160, 220, 255, 0.85)'
        btn.style.color       = '#dff2ff'
        btn.style.boxShadow   = '0 0 56px rgba(100,190,255,0.38), inset 0 1px 0 rgba(255,255,255,0.14)'
        btn.style.transform   = 'translateY(-2px)'
      })

      btn.addEventListener('mouseleave', () => {
        btn.style.background  = 'rgba(100, 180, 255, 0.18)'
        btn.style.borderColor = 'rgba(130, 200, 255, 0.65)'
        btn.style.color       = '#b8e0ff'
        btn.style.boxShadow   = '0 0 32px rgba(100,190,255,0.22), inset 0 1px 0 rgba(255,255,255,0.10)'
        btn.style.transform   = 'translateY(0)'
      })
    }

    inner.appendChild(btn)
  }

  el.appendChild(inner)
  return el
}

function Stars() {
  const { scene } = useThree()

  useEffect(() => {
    const geometry = new THREE.SphereGeometry(0.055, 5, 5)
    const material = new THREE.MeshStandardMaterial({
      color:             0xc8d8ff,
      emissive:          0x8aabff,
      emissiveIntensity: 1.4,
      roughness:         0.3,
      metalness:         0.0,
    })

    const mesh  = new THREE.InstancedMesh(geometry, material, STAR_COUNT)
    const dummy = new THREE.Object3D()

    const minDist = 55
    const maxDist = 70

    for (let i = 0; i < STAR_COUNT; i++) {
      let x, y, z, dist
      do {
        x = (Math.random() - 0.5) * 200
        y = (Math.random() - 0.5) * 100
        z = (Math.random() - 0.5) * 200
        dist = Math.sqrt(x * x + y * y + z * z)
      } while (dist < minDist || dist > maxDist)

      dummy.position.set(x, y, z)
      dummy.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      )
      dummy.scale.setScalar(0.5 + Math.random() * 1.5)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    }

    mesh.instanceMatrix.needsUpdate = true
    scene.add(mesh)

    return () => {
      scene.remove(mesh)
      geometry.dispose()
      material.dispose()
    }
  }, [scene])

  return null
}

export default function ScrollCards() {
  const scroll     = useScroll()
  const cardsRef   = useRef([])
  const overlayRef = useRef(null)

  useEffect(() => {
    document.documentElement.style.scrollbarWidth = 'none'
    document.body.style.overflow = 'hidden'

    const overlay = document.createElement('div')
    overlay.className = styles.overlay
    document.body.appendChild(overlay)
    overlayRef.current = overlay

    cardsRef.current = CARDS.map((card) => {
      const el = createCardElement(card)
      overlay.appendChild(el)
      return el
    })

    const handleResize = () => {
      const b = bp()
      cardsRef.current.forEach((el, i) => {
        const card   = CARDS[i]
        const isLeft = card.side === 'left'
        el.style.width   = cardWidth(b)
        el.style.padding = cardPadding(b)
        if (b === 'mobile') {
          el.style.left  = '50%'
          el.style.right = 'auto'
        } else {
          if (isLeft) { el.style.left = '5vw'; el.style.right = 'auto' }
          else        { el.style.right = '5vw'; el.style.left = 'auto' }
        }
        const titleEl = el.querySelector('[data-role="title"]')
        if (titleEl) titleEl.style.fontSize = card.titleSize[b]
      })
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.documentElement.style.scrollbarWidth = ''
      document.body.style.overflow = ''
      document.body.removeChild(overlay)
    }
  }, [])

  useFrame(() => {
    const o = scroll.offset
    const b = bp()
    const n = CARDS.length

    cardsRef.current.forEach((el, i) => {
      const isLeft  = CARDS[i].side === 'left'
      const start   = i / n
      const end     = i === n - 1 ? 1.01 : (i + 1) / n
      const visible = o >= start && o < end

      el.style.opacity       = visible ? '1' : '0'
      el.style.pointerEvents = visible ? 'auto' : 'none'

      if (b === 'mobile') {
        el.style.transform = visible
          ? 'translateY(-50%) translateX(-50%)'
          : 'translateY(-42%) translateX(-50%)'
      } else {
        el.style.transform = visible
          ? 'translateY(-50%) translateX(0px)'
          : `translateY(-50%) translateX(${isLeft ? '-80px' : '80px'})`
      }
    })
  })

  return <Stars />
}