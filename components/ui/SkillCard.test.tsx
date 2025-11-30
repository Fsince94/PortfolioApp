import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SkillCard } from './SkillCard';

describe('SkillCard Component', () => {
  const MockIcon = ({ className }: { className?: string }) => <svg className={className} data-testid="mock-icon" />;

  it('💡 Renderiza el nombre y el icono', () => {
    render(<SkillCard name="React" icon={MockIcon} />);
    
    expect(screen.getByText('React')).toBeDefined();
    expect(screen.getByTestId('mock-icon')).toBeDefined();
  });

  it('💡 Tiene la estructura de accesibilidad básica (texto visible)', () => {
    render(<SkillCard name="TypeScript" icon={MockIcon} />);
    expect(screen.getByText('TypeScript')).toBeTruthy();
  });
});
