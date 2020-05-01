import React, { useState, useRef } from "react"
import GoogleMapReact from "google-map-react"
import trees from "../../data/street-treesgeo.json"
import useSupercluster from "use-supercluster"
import { usePosition } from "use-position"
import "../../style/MyMap.css"
{
  /* Please create a .env file in root folder
  copy the code below and replace your api key
  REACT_APP_GOOGLE_API_KEY='key'
*/
}
export default function MyMap() {
  const Marker = ({ children }) => children
  const mapRef = useRef()
  const [bounds, setBounds] = useState(null)
  const [zoom, setZoom] = useState(14)
  const userLocation = usePosition()

  const style = {
    height: "80vh",
    width: "100%",
  }
  const treesdata = trees.features.filter((tree) => tree.geometry !== null)
  const points = treesdata.map((tree) => ({
    type: "Feature",
    properties: {
      cluster: false,
      treeId: tree.properties.tree_id,
      category: tree.properties.genus_name,
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(tree.geometry.coordinates[0]),
        parseFloat(tree.geometry.coordinates[1]),
      ],
    },
  }))
  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  })
  const test = {
    lat: 49.278752,
    lng: -123.100365,
  }
  if (userLocation.longitude)
    return (
      <div style={style}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "mykey",
          }}
          defaultCenter={{
            lat: userLocation.latitude,
            lng: userLocation.longitude,
          }}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map
          }}
          onChange={({ zoom, bounds }) => {
            setZoom(zoom)
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat,
            ])
          }}
        >
          {clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties

            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  lat={latitude}
                  lng={longitude}
                >
                  <div
                    className="cluster-marker"
                    style={{
                      width: `${10 + (pointCount / points.length) * 20}px`,
                      height: `${10 + (pointCount / points.length) * 20}px`,
                      // background: 'red',
                    }}
                    onClick={() => {
                      const expansionZoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        20
                      )
                      mapRef.current.setZoom(expansionZoom)
                      mapRef.current.panTo({
                        lat: latitude,
                        lng: longitude,
                      })
                    }}
                  >
                    {pointCount}
                  </div>
                </Marker>
              )
            }
            //   return (
            //     <Marker
            //       key={`crime-${cluster.properties.crimeId}`}
            //       lat={latitude}
            //       lng={longitude}
            //     >
            //       <button className="crime-marker">
            //         <img
            //           src="/custody.svg"
            //           alt="crime doesn't pay"
            //           style={{ width: '5px', height: '5px' }}
            //         />
            //       </button>
            //     </Marker>
            //   );
          })}

          <Marker lat={test.lat} lng={test.lng}>
            <button className="crime-marker">
              <img src="/images/house.svg" alt="home" />
            </button>
          </Marker>
        </GoogleMapReact>
      </div>
    )
  else return <div>loading</div>
}
