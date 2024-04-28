import { trackMousePosition } from '../main'

describe('trackMousePosition', () => {
  it('should log mouse position to the console on mousemove event', () => {
    // Мок document.addEventListener
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener')
    const mockConsoleLog = jest.spyOn(console, 'log')

    // Викликаємо функцію для встановлення обробника події
    trackMousePosition()

    // Створюємо фейкову подію mousemove і викликаємо обробник події
    const mouseMoveEvent = new MouseEvent('mousemove', {
      clientX: 100,
      clientY: 200
    })
    addEventListenerSpy.mock.calls[0][1](mouseMoveEvent)

    // Перевіряємо, що було виведено в консоль
    expect(mockConsoleLog).toHaveBeenCalledWith('Mouse X: 100, Mouse Y: 200')

    // Очищуємо моки
    addEventListenerSpy.mockRestore()
    mockConsoleLog.mockRestore()
  })
})
