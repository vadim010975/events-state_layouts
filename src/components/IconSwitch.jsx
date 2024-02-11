import PropTypes from 'prop-types';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

function IconeSwitch({icon, onSwitch}) {

  return (
    <div className='wrapperIcon'>
      {icon === "view_module" ? <ViewListIcon onClick={onSwitch} /> : <ViewModuleIcon onClick={onSwitch} />}
    </div>
  )
}

IconeSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
}

export default IconeSwitch;