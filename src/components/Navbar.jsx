import styled from '@emotion/styled';

const NavbarContainer = styled.nav`
  background-color: #6098E8;
  padding: 10px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;

	justify-content: space-between;
  color: white;
`;

const MenuItem = styled.li`
  font-weight: bold;

  font-size: 20px;
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Menu>
        <MenuItem >Menu</MenuItem>
        <MenuItem>User Name</MenuItem>
        <MenuItem>Sales Report</MenuItem>
      </Menu>
    </NavbarContainer>
  );
};