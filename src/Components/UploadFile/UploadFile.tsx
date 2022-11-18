import React from 'react';
import Box from '../Elements/Box/Box';
import Input from '../Elements/Input/Input';
import Typography from '../Elements/Typography/Typography';
import { theme } from '../Theme/theme';
import camera from '../../images/camera.svg';
import './uploadFile.scss';
interface IUploadFile {
  file: {
    url: string;
    image: string;
  };
  hide?: boolean;
  changeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadFile: React.FC<IUploadFile> = ({ hide, file, changeFile }) => {
  const visibility = hide ? file.image : false;

  return (
    <Box
      backgroundColor={theme.palette.blue.secondary}
      display="flex"
      justify={'space-between'}
      align="center"
      boradius="5px"
      p="5px"
      m="0 0 5px 0">
      {visibility ? (
        <Box>
          <Typography fontSize="16px" color="white" gutterButtom>
            File successfully upload
          </Typography>
        </Box>
      ) : (
        <Box display="flex" justify="space-evenly" flexDirection="column">
          <Typography fontSize="18px" fontWeight={600} color="white" gutterButtom>
            {file.image && file.url === '' ? 'Change File' : 'Add File'}
          </Typography>
          <Input type="file" value={file.url} onChange={(e) => changeFile(e)} />
        </Box>
      )}
      <Box p="5px" boradius="5px" width="100px" height="100px" overflow="hidden">
        <img className="upload" src={file.image ? file.image : camera} alt="upload image" />
      </Box>
    </Box>
  );
};

export default UploadFile;
