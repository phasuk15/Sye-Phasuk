import Wavify from "react-wavify";

const WaveComponent = () => {
  return (
    <div>
        <Wavify
            className='absolute bottom-0 w-full'
            fill="#3b4374"
            paused={false}
            options={{
                height: 20,
                amplitude: 40,
                speed: 0.15,
                points: 4,
            }}
            style={{zIndex:5}}
        />
        <Wavify
            className='absolute bottom-0 w-full'
            fill="#645d92"
            paused={false}
            options={{
                height: 20,
                amplitude: 35,
                speed: 0.13,
                points: 4,
            }}
            style={{zIndex:4}}
        /> 
        <Wavify
            className='absolute bottom-0 w-full'
            fill="#8e79b1"
            paused={false}
            options={{
                height: 15,
                amplitude: 30,
                speed: 0.1,
                points: 4,
            }}
            style={{zIndex:3}}
        /> 
        <Wavify
            className='absolute bottom-0 w-full'
            fill="#b996cf"
            paused={false}
            options={{
                height: 10,
                amplitude: 25,
                speed: 0.08,
                points: 4,
            }}
            style={{zIndex:2}}
        /> 
        <Wavify
            className='absolute bottom-0 w-full'
            fill="#e5b4ed"
            paused={false}
            options={{
                height: 5,
                amplitude: 20,
                speed: 0.03,
                points: 4,
            }}
            style={{zIndex:1}}
        /> 

    </div> 
  )
}

export default WaveComponent;




//layer1 = 3b4374 blue
//layer2 = 645d92
//layer3 = 8e79b1
//layer4 = b996cf
//layer5 = e5b4ed pink
