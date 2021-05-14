import './styles.css';

function UserInfo() {
  return (
    <div className="user-info-container">
      <div className="user-info">
        <div className="user-info-avatar-content">
          <img
            src="https://avatars2.githubusercontent.com/u/13897257?v=4"
            alt="Avatar do usuário"
            className="user-info-avatar"
          />
          <button className="btn btn-primary">
            Ver perfil
          </button>
        </div>
        <div className="user-info-details">
          <div className="badges-content">
            <span className="badge-item user-info-item" >
              Repositórios públicos: 62
            </span>
            <span className="badge-item user-info-item">
              Seguidores: 127
            </span>
            <span className="badge-item user-info-item">
              Seguindo: 416
            </span>
          </div>
          <div className="user-info-content user-info-item">
            <h3 className="user-info-title">Informações</h3>
            <div className="user-info-details-item user-info-item">
              <strong>Empresa: {' '}</strong> @ZupIT
            </div>
            <div className="user-info-details-item user-info-item">
              <strong>Website/Blog: {' '}</strong> https://thewashington.dev
            </div>
            <div className="user-info-details-item user-info-item">
              <strong>Localidade: {' '}</strong> Uberlândia
            </div>
            <div className="user-info-details-item user-info-item">
              <strong>Membro desde: {' '}</strong> 19/10/2013
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;