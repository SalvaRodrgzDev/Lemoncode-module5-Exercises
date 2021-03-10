import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('', () => {
  it('Should return an initialized confirmation dialog object', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('Should open the dialog and set item to delete', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() =>
      result.current.onOpenDialog({
        id: 'test id',
        name: 'test item',
      })
    );
    // Assert
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual({
      id: 'test id',
      name: 'test item',
    });
  });

  it('Should be possible to close the dialog', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog({
        id: '',
        name: '',
      });

      result.current.onClose();
    });
    // Assert
    expect(result.current.isOpen).toBe(false);
  });

  it('Should reset item to delete', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog({
        id: '0',
        name: 'test item',
      });

      result.current.onAccept();
    });
    // Assert
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });
});
