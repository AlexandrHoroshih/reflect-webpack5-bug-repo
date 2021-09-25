import { ChangeEvent, SyntheticEvent } from 'react';

export function trimEvent(event: ChangeEvent<HTMLInputElement>): string {
  return event.target.value;
}

export function trimPreventedEvent(event: SyntheticEvent): void {
  event.preventDefault();
}
