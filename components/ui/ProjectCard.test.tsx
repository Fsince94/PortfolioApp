import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

// 💡 Mock de los iconos para simplificar el test
vi.mock('../../lib/iconMap', () => ({
  technologyIcons: {
    'React': () => <svg data-testid="icon-react" />,
  },
  roleBadges: {
    'Frontend': { icon: () => <svg />, color: 'bg-blue-500', label: 'Frontend' },
  },
}));

describe('ProjectCard Component', () => {
  const mockProject = {
    title: 'Test Project',
    description: 'A test project description',
    roles: ['Frontend'] as any,
    technologies: ['React'],
  };

  it('💡 Renderiza correctamente la información del proyecto', () => {
    render(<ProjectCard project={mockProject} t_tech_label="Technologies" t_buy_label="Buy Now" onNavigateToSkill={vi.fn()} />);
    
    expect(screen.getByText('Test Project')).toBeDefined();
    expect(screen.getByText('A test project description')).toBeDefined();
    expect(screen.getByText('Frontend')).toBeDefined();
    expect(screen.getByText('Technologies')).toBeDefined();
  });

  it('💡 Renderiza los iconos de tecnología', () => {
    render(<ProjectCard project={mockProject} t_tech_label="Technologies" t_buy_label="Buy Now" onNavigateToSkill={vi.fn()} />);
    expect(screen.getByTestId('icon-react')).toBeDefined();
  });

  it('💡 Renderiza el botón de comprar si buyUrl existe', () => {
    const projectWithBuy = { ...mockProject, buyUrl: 'https://test.com' };
    render(<ProjectCard project={projectWithBuy} t_tech_label="Technologies" t_buy_label="Comprar Ahora" onNavigateToSkill={vi.fn()} />);
    
    expect(screen.getByText('Comprar Ahora')).toBeDefined();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://test.com');
  });

  it('💡 NO Renderiza el botón de comprar si buyUrl no existe', () => {
    render(<ProjectCard project={mockProject} t_tech_label="Technologies" t_buy_label="Comprar Ahora" onNavigateToSkill={vi.fn()} />);
    
    expect(screen.queryByText('Comprar Ahora')).toBeNull();
  });
});