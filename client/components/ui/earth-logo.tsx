export function EarthLogo() {
  return (
    <div className="relative w-16 h-16 mx-auto">
      {/* Earth Image with Rotation */}
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Fbc155459c6e64155ba21b056793acaff%2F5f2fa675fc1b4a35bec3a784ba7f044a?format=webp&width=800"
        alt="Earth"
        className="w-full h-full object-contain"
        style={{
          animation: "earthRotation 20s linear infinite",
          filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))",
        }}
      />

      <style jsx>{`
        @keyframes earthRotation {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </div>
  );
}
