import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'lazy' | 'eager';
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle,
  loading = 'lazy',
}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full bg-zinc-100 flex flex-col items-center justify-center p-6 text-center text-zinc-500">
        <Building2 size={28} className="text-zinc-400 mb-2" />
        <p className="text-xs font-medium text-zinc-600 max-w-[200px]">
          {fallbackTitle ?? alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};
