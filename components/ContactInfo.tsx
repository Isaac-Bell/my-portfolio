import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          Let&lsquo;s Connect
        </h2>
        <p className="text-neutral-600 mb-8">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <div className="space-y-4">
          <a
            href="mailto:contact@example.com"
            className="flex items-center space-x-3 text-neutral-700 hover:text-neutral-900"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            <span>isaacmosesbell@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/isaac-m-bell/"
            target="_blank"
            className="flex items-center space-x-3 text-neutral-700 hover:text-neutral-900"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://github.com/Isaac-Bell"
            target="_blank"
            className="flex items-center space-x-3 text-neutral-700 hover:text-neutral-900"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            <span>GitHub Profile</span>
          </a>
        </div>
      </div>
      <div className="bg-neutral-100 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
          Base Location
        </h3>
        <p className="text-neutral-600">Hamilton, NZ</p>
        <p className="text-neutral-600">Available for remote work worldwide</p>
      </div>
    </div>
  )
}

export default ContactInfo
