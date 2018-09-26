const apiKey = ''

const Yelp = function(term, location, sortBy) {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}` 
    }
  }).then(response => { 
    return response.json()
  }).then(jsonResponse => {
    if(jsonResponse.businesses) {           
      return jsonResponse.businesses.map(business => {
        return { 
          id: business.id,
          imageSRC: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories,
          rating: business.rating,
          reviewCount: business.review_count,
          coordinates: business.coordinates
        }
      })
    }
  }).catch(error => console.log(error));  
};

export { Yelp };