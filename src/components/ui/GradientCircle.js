import styled from '@emotion/styled'
import { styles } from 'config/styles'

const GradientCircle = () => {
  return <Gradient></Gradient>
}

const Gradient = styled.div`
  background: linear-gradient(228.41deg, #bcfbff 15.43%, #cda1ee 83.82%);
  box-sizing: border-box;
  filter: blur(100px);
  height: 400px;
  width: 100%;
  max-width: 400px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  border-radius: 50%;
  margin-left: 50%;
  transform: translateX(-50%);

  @media (min-width: ${styles.desktopQuery}) {
    margin-left: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }
`

export default GradientCircle
