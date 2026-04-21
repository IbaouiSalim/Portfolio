import React, { useState, useEffect, useRef } from 'react';

const ThreeBackground = ({ isLoaded = true }) => {
  const mountRef = useRef(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded || !mountRef.current) return;

    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;
    let frameId;
    let scene, camera, renderer, particlesMesh, object;

    // Load Three.js from CDN
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.async = true;
    
    script.onload = () => {
      setScriptLoaded(true);
      
      try {
        // Scene setup
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        });
        
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x070708, 0);
        mountRef.current.appendChild(renderer.domElement);

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const count = 800;
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
          positions[i] = (Math.random() - 0.5) * 12;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.012,
          color: '#818cf8',
          transparent: true,
          opacity: 0.4,
          sizeAttenuation: true
        });

        particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Create torus knot
        const geometry = new THREE.TorusKnotGeometry(1.5, 0.4, 100, 16);
        const material = new THREE.MeshBasicMaterial({ 
          color: '#4f46e5', 
          wireframe: true,
          transparent: true,
          opacity: 0.08
        });
        object = new THREE.Mesh(geometry, material);
        scene.add(object);

        camera.position.z = 4;

        // Animation loop
        const animate = () => {
          particlesMesh.rotation.y += 0.0008;
          object.rotation.y += 0.0015;
          object.rotation.x += 0.001;
          
          renderer.render(scene, camera);
          frameId = window.requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
          if (!mountRef.current) return;
          width = mountRef.current.clientWidth;
          height = mountRef.current.clientHeight;
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      } catch (error) {
        console.error('Three.js initialization error:', error);
      }
    };

    script.onerror = () => {
      console.error('Failed to load Three.js');
    };

    document.head.appendChild(script);

    return () => {
      window.cancelAnimationFrame(frameId);
      if (mountRef.current && mountRef.current.firstChild) {
        try {
          mountRef.current.removeChild(mountRef.current.firstChild);
        } catch (e) {
          // Element may have already been removed
        }
      }
    };
  }, [isLoaded]);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      aria-label="3D background animation"
    />
  );
};

export default ThreeBackground;
