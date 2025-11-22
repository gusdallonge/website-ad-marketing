"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

// Import dynamique pour éviter les problèmes SSR avec Three.js
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false })

// Hub central - Sheridan, Wyoming
const hub = { city: "Sheridan", lat: 44.7972, lng: -106.9561, country: "USA" }

// Données des villes avec coordonnées réelles
const locations = [
  hub,
  { city: "New York", lat: 40.7128, lng: -74.0060, country: "USA" },
  { city: "San Francisco", lat: 37.7749, lng: -122.4194, country: "USA" },
  { city: "New Orleans", lat: 29.9511, lng: -90.0715, country: "USA" },
  { city: "Toronto", lat: 43.6532, lng: -79.3832, country: "Canada" },
  { city: "Zurich", lat: 47.3769, lng: 8.5417, country: "Switzerland" },
  { city: "Luxembourg", lat: 49.6116, lng: 6.1319, country: "Luxembourg" },
  { city: "Brussels", lat: 50.8503, lng: 4.3517, country: "Belgium" },
  { city: "Paris", lat: 48.8566, lng: 2.3522, country: "France" },
  { city: "Bali", lat: -8.3405, lng: 115.0920, country: "Indonesia" },
  { city: "Belgrade", lat: 44.7866, lng: 20.4489, country: "Serbia" },
  { city: "Zagreb", lat: 45.8150, lng: 15.9819, country: "Croatia" },
  { city: "Bucharest", lat: 44.4268, lng: 26.1025, country: "Romania" },
  { city: "Dubai", lat: 25.2048, lng: 55.2708, country: "UAE" },
]


// Palette de couleurs pour les lignes
const colors = [
  '#10b981', // green
  '#3b82f6', // blue
  '#8b5cf6', // purple
  '#ef4444', // red
  '#f59e0b', // amber
  '#ec4899', // pink
  '#06b6d4', // cyan
]

// Créer des lignes droites entre Sheridan et toutes les autres villes avec couleurs
const arcs = locations
  .filter(loc => loc.city !== "Sheridan")
  .map((loc, index) => ({
    startLat: hub.lat,
    startLng: hub.lng,
    endLat: loc.lat,
    endLng: loc.lng,
    color: colors[index % colors.length],
  }))

export default function ClientGlobe() {
  const [isVisible, setIsVisible] = useState(false)
  const [countries, setCountries] = useState<any>({ features: [] })
  const [globeSize, setGlobeSize] = useState({ width: 600, height: 500 })
  const sectionRef = useRef<HTMLElement>(null)
  const globeRef = useRef<any>(null)

  // Charger les données géographiques des pays
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries)
  }, [])

  // Ajuster la taille du globe selon la taille de l'écran
  useEffect(() => {
    const updateGlobeSize = () => {
      if (window.innerWidth < 640) {
        // Mobile - globe réduit
        setGlobeSize({ width: 380, height: 380 })
      } else if (window.innerWidth < 1024) {
        // Tablette
        setGlobeSize({ width: 650, height: 650 })
      } else {
        // Desktop - globe plus gros
        setGlobeSize({ width: 750, height: 650 })
      }
    }

    updateGlobeSize()
    window.addEventListener('resize', updateGlobeSize)
    return () => window.removeEventListener('resize', updateGlobeSize)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px"
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  // Configuration du globe
  useEffect(() => {
    if (globeRef.current && isVisible) {
      const controls = globeRef.current.controls()

      // Rotation automatique
      controls.autoRotate = true
      controls.autoRotateSpeed = 1

      // Désactiver tous les contrôles utilisateur
      controls.enableZoom = false
      controls.enablePan = false
      controls.enableRotate = false

      // Point de vue initial centré sur les États-Unis
      globeRef.current.pointOfView({ lat: 40, lng: -100, altitude: 2.5 }, 1000)
    }
  }, [isVisible, globeRef.current])

  return (
    <section ref={sectionRef} className="w-full pt-8 pb-2 sm:pt-8 sm:pb-4">
      <div className="w-full px-6">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl text-white font-medium text-center mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Trusted worldwide
        </h2>
        <p className={`text-white/60 text-center text-sm sm:text-base mb-8 sm:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.1s' }}>
          Delivering digital excellence across 11 countries
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT: Globe 3D */}
            <div className={`order-2 lg:order-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="glass-card p-6 sm:p-8">
                <div
                  className="w-full relative flex items-center justify-center overflow-hidden aspect-square sm:aspect-auto sm:h-[500px]"
                  style={{
                    pointerEvents: 'none'
                  }}
                >
                  {isVisible && (
                    <Globe
                      ref={globeRef}
                      width={globeSize.width}
                      height={globeSize.height}
                      backgroundColor="rgba(0,0,0,0)"

                      // Pas de texture - globe transparent
                      showGlobe={false}

                      // Grille subtile pour la structure
                      showGraticules={true}

                      // Continents avec polygones pointillés
                      polygonsData={countries.features}
                      polygonCapColor={() => 'rgba(255, 255, 255, 0.05)'}
                      polygonSideColor={() => 'rgba(255, 255, 255, 0.02)'}
                      polygonStrokeColor={() => 'rgba(255, 255, 255, 0.3)'}
                      polygonAltitude={0.001}

                      // Points pour les villes - plus visibles
                      pointsData={locations}
                      pointAltitude={0.02}
                      pointColor={() => '#10b981'}
                      pointRadius={0.7}

                      // Lignes reliant les villes avec animation
                      arcsData={arcs}
                      arcColor={(d: any) => d.color}
                      arcStroke={0.7}
                      arcAltitude={0}
                      arcCurveResolution={64}
                      arcDashLength={0.5}
                      arcDashGap={0.5}
                      arcDashAnimateTime={4000}

                      // Pas d'atmosphère
                      showAtmosphere={false}

                      // Contrôles
                      enablePointerInteraction={false}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT: Stats */}
            <div className={`order-1 lg:order-2 space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '0.3s' }}>
              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Projects Delivered</span>
                </div>
                <div className="text-xl lg:text-2xl text-white font-semibold mb-2">170+</div>
                <p className="text-white/50 text-sm">
                  Successfully completed projects across landing pages, websites, e-commerce stores, and web applications
                </p>
              </div>

              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Global Reach</span>
                </div>
                <div className="text-xl lg:text-2xl text-white font-semibold mb-2">11</div>
                <p className="text-white/50 text-sm">
                  Countries served from North America to Europe, Middle East, and Asia-Pacific
                </p>
              </div>

              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-white/60 text-sm font-medium uppercase tracking-wider">On-Time Delivery</span>
                </div>
                <div className="text-xl lg:text-2xl text-white font-semibold mb-2">100%</div>
                <p className="text-white/50 text-sm">
                  Perfect track record delivering projects on schedule without compromising quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
