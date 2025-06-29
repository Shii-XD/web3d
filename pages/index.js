import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState } from 'react';

function VRHeadsetModel() {
  const { scene } = useGLTF('https://modelviewer.dev/shared-assets/models/Astronaut.glb');
  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
}

export default function Home() {
  const [selected, setSelected] = useState('Redline');

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold text-orange-400">INFINITE<span className="text-white">VR</span>TAIL</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#" className="hover:text-orange-400">Home</a>
          <a href="#" className="hover:text-orange-400">Specs</a>
          <a href="#" className="hover:text-orange-400">Models</a>
          <button className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 rounded">Add to cart 🛒</button>
        </nav>
      </header>

      <main className="grid md:grid-cols-2 items-center px-8 py-10 gap-10">
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold leading-tight">
            Your <span className="text-orange-400">portal</span> to <br /> <span className="text-orange-500">virtual adventures</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-md">
            Dive headfirst into a universe of potential. State-of-the-art VR, made for limitless immersion.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 text-lg rounded-full">
            Pre-order now →
          </button>
        </div>

        <div className="relative w-full h-[500px]">
          <Canvas camera={{ position: [0, 1, 4] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} intensity={1.5} />
            <OrbitControls enableZoom={false} />
            <VRHeadsetModel />
          </Canvas>
        </div>
      </main>

      <section className="px-8 py-10">
        <h3 className="text-xl font-bold mb-4">Choose your style:</h3>
        <div className="flex gap-4">
          {['Redline', 'HoloBlue', 'Midnight'].map((model) => (
            <div
              key={model}
              onClick={() => setSelected(model)}
              className={`border px-4 py-2 rounded cursor-pointer transition hover:border-orange-400 ${selected === model ? 'bg-orange-500 text-black' : 'bg-gray-800'}`}
            >
              {model} {selected === model && '✔'}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

useGLTF.preload('https://modelviewer.dev/shared-assets/models/Astronaut.glb');
