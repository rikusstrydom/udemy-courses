import axios from 'axios';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'API_KEY';

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

function searchHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      console.log(response);

      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location!');
      }

      const coordinates = response.data.results[0].geometry.location;

      const map = new google.maps.Map(document.getElementById('map')!, {
        center: coordinates,
        zoom: 15,
      });

      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((error) => {
      alert(error.message);
      console.log('error', error);
    });
}

form?.addEventListener('submit', searchHandler);
