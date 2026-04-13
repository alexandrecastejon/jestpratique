import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
  it('Deve renderizar o componente corretamente', () => {
    render(<PostComments />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });

  it('Deve inserir dois comentários', async () => {
    render(<PostComments />);

    const input = screen.getByTestId('comment-input');
    const submit = screen.getByTestId('comment-submit');

    await userEvent.type(input, 'Primeiro comentário');
    await userEvent.click(submit);

    await userEvent.type(input, 'Segundo comentário');
    await userEvent.click(submit);

    const list = screen.getByTestId('comments-list');
    expect(list).toHaveTextContent('Primeiro comentário');
    expect(list).toHaveTextContent('Segundo comentário');
  });
});
