'use client'

import { useEffect, useRef } from 'react'
import { SITE } from '@/content/site'

export function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    let map: { remove: () => void } | null = null

    async function initMap() {
      const L = (await import('leaflet')).default

      if (!mapRef.current) return

      // Destroy any existing Leaflet instance on this container (React Strict Mode runs effects twice)
      // @ts-expect-error — Leaflet attaches _leaflet_id to the DOM element
      if (mapRef.current._leaflet_id) {
        // @ts-expect-error
        mapRef.current._leaflet_id = null
      }

      const icon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
      })

      map = L.map(mapRef.current, {
        center: [SITE.location.lat, SITE.location.lng],
        zoom: 14,
        zoomControl: true,
        scrollWheelZoom: false,
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map as never)

      L.marker([SITE.location.lat, SITE.location.lng], { icon })
        .addTo(map as never)
        .bindPopup(`<strong>${SITE.name}</strong><br>${SITE.location.city}`)
        .openPopup()
    }

    initMap()

    return () => {
      map?.remove()
    }
  }, [])

  return (
    <div
      ref={mapRef}
      className="map-container"
      aria-label={`Map showing ${SITE.name} location in ${SITE.location.city}`}
      role="application"
    />
  )
}
