export default function Lights() {
  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.4} />
      
      {/* Main directional light (sun) */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Magical atmosphere light */}
      <pointLight
        position={[0, 10, 0]}
        intensity={0.3}
        color="#6a5acd"
        distance={50}
      />
      
      {/* Fog for atmospheric effect */}
      <fog attach="fog" args={["#87CEEB", 30, 100]} />
    </>
  );
}
