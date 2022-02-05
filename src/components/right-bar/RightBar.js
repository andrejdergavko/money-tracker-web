import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { FileLoader } from './file-loader';

export function RightBar() {
  const [css, theme] = useStyletron();
  return (
    <Block
      className={css({
        backgroundColor: theme.colors.primary50,
        padding: '15px',
        boxSizing: 'border-box',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      })}
    >

      <FileLoader />
    </Block>
  );
}
