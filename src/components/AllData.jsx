import { useGetWeather } from '../hooks/useGetWeather'


function AllData({ city }) {
  const { dataValues } = useGetWeather(city)
  
  return (
    <section className='md:col-span-8 col-span-12 bg-[#f6f6f8] p-3 md:p-4 lg:p-6'>
      <div>
        <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-center md:text-start'>
          OTROS DATOS DE HOY
        </h1>
      </div>

      <div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-2'>
        {
          Object.values(dataValues).map((item, index) => (
            <div className='bg-white rounded-lg shadow p-3' key={index}>
              {
                <div>
                  <h3 className=' text-[10px] md:text-xs text-slate-400 font-semibold flex relative'>
                    {item.title}
                    { 
                      item.icon === '' ? '' :
                      <span className='absolute inset-y-0 right-0'>
                        <img src={item.icon} alt="" width={20} height={20} />
                      </span>
                    }
                  </h3>

                  <p className='mt-2'>
                    <span className='text-md md:text-xl lg:text-3xl font-semibold'>
                      {item.value} {item.unit}
                    </span>
                  </p>
                </div>
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default AllData
