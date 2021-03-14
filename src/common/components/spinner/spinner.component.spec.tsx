import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { SpinnerComponent } from "./spinner.component";
import { trackPromise } from 'react-promise-tracker';

beforeEach(() => {

});

describe('', () => {
  it('Should not render a spinner if there is no promise being tracked', () => {
    // Arrange

    // Act
    render(
      <SpinnerComponent />
    );

    // Assert
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });

  it('Should render a spinner if there is a promise being tracked and waiting for response', () => {
    // Arrange
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          () => 'test promise resolved'
        );
      }, 1000);
    });

    // Act
    render(
      <SpinnerComponent />
    );
    trackPromise(promise);

    // Assert
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('Should remove spinner after a promise being tracked is resolved', async () => {
    // Arrange
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          () => 'test promise resolved'
        );
      }, 1000);
    });

    // Act
    render(
      <SpinnerComponent />
    );
    trackPromise(promise);

    // Assert
    await waitForElementToBeRemoved(() => screen.getByRole('presentation'))
  });
});
