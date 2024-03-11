import axios from 'axios';

const Page = async ({params}:any) => {  

    const responseData = await getData();
    const title = responseData.data.result.related[params.id++]?.title;
    const imageUrl = responseData.data.result.related[params.id++]?.image;
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:max-w-4xl">
    <p className="text-gray-800 font-semibold text-lg px-4 py-2"> Title: {title}</p>
    <img className="w-full" src={imageUrl} alt="Image" />
  </div>

  </div>


  );
};

export async function getData () {
  try {
    const response = await axios.get('https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874');
    
    const data = response.data;
    return data;

      } catch (error) {
    console.error('Error fetching data:', error);
    
    return {
      };  }
}

export default Page;