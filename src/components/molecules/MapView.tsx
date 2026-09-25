import { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  Props
// -----------------------------------------------------------------------------

interface MapViewProps {
  apiKey?: string;
  zoom?: number;
}

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const ADDRESS = '2111 S. College Ave, Ste B';
const CITY_N_ZIP = 'Fort Collins, CO 80525';
const LOCATION = {
  lat: 40.56001,
  lng: -105.07904,
};

// -----------------------------------------------------------------------------
//  MapView
// -----------------------------------------------------------------------------

export const MapView = ({
  apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  zoom = 15,
}: MapViewProps) => {
  const { t } = useTranslation();
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  // Early return if no API key
  if (!apiKey) {
    return <div>Google Maps API Key is missing.</div>;
  }

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Card sx={{ width: '100%' }}>
      <CardHeader
        title={t('mapView.title')}
        subheader={
          <>
            {ADDRESS}
            <br />
            {CITY_N_ZIP}
          </>
        }
      />

      <CardContent>
        <APIProvider apiKey={apiKey}>
          {/* Ensure the map container has an explicit width and height */}
          <div
            style={{
              width: '100%',
              height: '340px',
              border: '2px solid black',
              borderRadius: '2px'
            }}
          >
            <Map
              defaultCenter={LOCATION}
              defaultZoom={zoom}
              gestureHandling="greedy"
              disableDefaultUI={false}
              mapId={import.meta.env.VITE_GOOGLE_MAP_ID}
            >
              <AdvancedMarker
                ref={markerRef}
                position={LOCATION}
                title="Click to view info"
                onClick={() => setIsInfoOpen(true)}
              />

              {isInfoOpen && (
                <InfoWindow
                  anchor={marker}
                  onCloseClick={() => setIsInfoOpen(false)}
                  style={{ maxWidth: '240px' }}
                  headerContent={
                    <Typography>Vida Wellness Center</Typography>
                  }
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >
                    {t('mapView.infoWindow.desc')}
                  </Typography>
                </InfoWindow>
              )}
            </Map>
          </div>
        </APIProvider >
      </CardContent>
    </Card>
  );
};
