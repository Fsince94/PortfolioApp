import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmDialog } from './ConfirmDialog';

// 💡 Mockeamos AnimatePresence para evitar problemas con animaciones en tests jsdom.
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
});

describe('ConfirmDialog Component', () => {
  const defaultProps = {
    isOpen: true,
    title: '¿Estás seguro?',
    description: 'Esta acción es irreversible.',
    onConfirm: vi.fn(),
    onCancel: vi.fn(),
  };

  it('💡 Debería renderizarse correctamente cuando está abierto', () => {
    render(<ConfirmDialog {...defaultProps} />);
    
    expect(screen.getByText('¿Estás seguro?')).toBeDefined();
    expect(screen.getByText('Esta acción es irreversible.')).toBeDefined();
    expect(screen.getByRole('dialog')).toBeDefined();
  });

  it('💡 No debería renderizarse cuando isOpen es false', () => {
    render(<ConfirmDialog {...defaultProps} isOpen={false} />);
    
    const title = screen.queryByText('¿Estás seguro?');
    expect(title).toBeNull();
  });

  it('💡 Debería llamar a onConfirm al hacer click en confirmar', () => {
    render(<ConfirmDialog {...defaultProps} />);
    
    const confirmButton = screen.getByText('Confirmar');
    fireEvent.click(confirmButton);
    
    expect(defaultProps.onConfirm).toHaveBeenCalledTimes(1);
  });

  it('💡 Debería llamar a onCancel al hacer click en cancelar', () => {
    render(<ConfirmDialog {...defaultProps} />);
    
    const cancelButton = screen.getByText('Cancelar');
    fireEvent.click(cancelButton);
    
    expect(defaultProps.onCancel).toHaveBeenCalledTimes(1);
  });
});