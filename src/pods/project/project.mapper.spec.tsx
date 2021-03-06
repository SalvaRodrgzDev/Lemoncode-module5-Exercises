import * as apiModel from './api/project.api-model';
import { mapProjectFromApiToVm } from './project.mapper';
import * as viewModel from './project.vm';
describe('mappers specs', () => {
  it('Should create new Empty project when api returns undefined', ()=> {
    // Arrange
    const emptyProject: apiModel.Project = undefined;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(emptyProject);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject())
  });

  it('Should create new Empty project when api returns null', ()=> {
    // Arrange
    const emptyProject: apiModel.Project = null;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(emptyProject);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('Should create new Empty project when api returns undefined', ()=> {
    // Arrange
    const emptyProject: apiModel.Project = undefined;

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(emptyProject);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  // Como vm y api models son iguales no hago el test para comprobar solamente el mapeo

  it('Should not return empty project if api returns project with data', ()=> {
    // Arrange
    const apiProject: apiModel.Project = {
      id: '1',
      name: 'test project',
      isActive: false,
      employees: []
    };

    // Act
    const emptyProject: viewModel.Project = viewModel.createEmptyProject();
    const result: viewModel.Project = mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result).not.toEqual(emptyProject);
  });
});
