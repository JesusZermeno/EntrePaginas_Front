import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Paleta de colores mejorada
const colors = {
  primary: '#15803d', // Verde más vibrante
  primaryHover: '#166534',
  dark: '#1e293b',
  lightDark: '#334155',
  gray: '#64748b',
  lightGray: '#e2e8f0',
  background: '#f8fafc',
  white: '#ffffff',
  error: '#dc2626'
};

// BookCard Styles mejorados
export const Card = styled.div`
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(30, 41, 59, 0.13);
  padding: 2rem 1.3rem 1.5rem 1.3rem;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  border: 2.5px solid transparent;
  background-clip: padding-box;
  transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
  border-image: linear-gradient(120deg, #15803d 0%, #2563eb 100%) 1;
  &:hover {
    box-shadow: 0 16px 40px rgba(30, 41, 59, 0.18);
    border: 2.5px solid #2563eb;
    transform: translateY(-6px) scale(1.03);
  }
  @media (max-width: 768px) {
    width: 200px;
    padding: 1.5rem 1rem;
  }
  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`;

export const Cover = styled.img`
  width: 140px;
  height: 190px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1.1rem;
  background: #e0f2fe;
  box-shadow: 0 6px 18px rgba(30,41,59,0.10);
  border: 2px solid #c7d2fe;
  transition: transform 0.3s, box-shadow 0.3s;
  ${Card}:hover & {
    transform: scale(1.06);
    box-shadow: 0 12px 32px rgba(30,41,59,0.18);
    border-color: #2563eb;
  }
`;

export const Title = styled.h3`
  font-size: 1.18rem;
  font-weight: 700;
  margin: 0.7rem 0 0.3rem;
  text-align: center;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Author = styled.p`
  font-size: 1rem;
  color: #64748b;
  margin: 0 0 1rem;
  text-align: center;
  font-style: italic;
`;

export const Price = styled.div`
  font-size: 1.18rem;
  font-weight: 700;
  color: #15803d;
  margin-bottom: 1.2rem;
  background: #e0f7fa;
  border-radius: 12px;
  padding: 0.3rem 1.1rem;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(30,41,59,0.07);
  &::before {
    content: '$';
    font-size: 0.9em;
    margin-right: 2px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.7rem;
  border-radius: 14px;
`;

export const DetailsButton = styled(Link)`
  background: ${colors.dark};
  color: ${colors.white};
  padding: 0.6rem 1.2rem;
  border-radius: 24px;
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(30, 41, 59, 0.08);
  width: 100%;
  
  &:hover {
    background: ${colors.lightDark};
    box-shadow: 0 4px 12px rgba(30, 41, 59, 0.12);
    transform: translateY(-1px);
  }
`;

export const AddButton = styled.button`
  background: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 24px;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(30, 41, 59, 0.08);
  width: 100%;
  
  &:hover:enabled {
    background: ${colors.primaryHover};
    box-shadow: 0 4px 12px rgba(30, 41, 59, 0.12);
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: ${colors.lightGray};
    color: ${colors.gray};
    cursor: not-allowed;
  }
`;

// Navbar Styles mejorados
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3.5rem;
  background: linear-gradient(90deg, #f0fdfa 0%, #c7d2fe 100%);
  box-shadow: 0 4px 18px rgba(30, 41, 59, 0.10);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #e2e8f0;
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    flex-wrap: wrap;
  }
`;

export const Logo = styled(Link)`
  font-weight: 700;
  font-size: 2rem;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  &::before {
    content: '📚';
    font-size: 1.4em;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 0.5rem;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const NavLink = styled(Link)`
  font-weight: 500;
  color: #1e293b;
  transition: color 0.2s, background 0.2s, box-shadow 0.2s;
  position: relative;
  padding: 0.4rem 1.1rem;
  border-radius: 18px;
  &:hover {
    color: #fff;
    background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
    box-shadow: 0 2px 8px rgba(30,41,59,0.10);
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #2563eb;
    }
  }
`;

export const CartLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const CartBadge = styled.span`
  background: ${colors.primary};
  color: ${colors.white};
  border-radius: 50%;
  font-size: 0.75rem;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.2rem;
  font-weight: 600;
  position: absolute;
  top: -8px;
  right: -12px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(30, 41, 59, 0.08);
  border: 1px solid #e2e8f0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.3rem 0.8rem;
  }
`;

export const UserName = styled.span`
  font-weight: 600;
  color: ${colors.dark};
  font-size: 0.95rem;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const LogoutBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.4rem 1.1rem;
  border-radius: 18px;
  font-weight: 500;
  color: #1e293b;
  transition: color 0.2s, background 0.2s, box-shadow 0.2s;
  
  &:hover {
    color: #fff;
    background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
    box-shadow: 0 2px 8px rgba(30,41,59,0.10);
  }
`;

// Carousel Styles mejorados
export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 3rem auto;
  padding: 0 2rem;
  position: relative;
  
  @media (max-width: 900px) {
    padding: 0 1rem;
    margin: 2rem auto;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${colors.dark};
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 70%;
    width: 4px;
    background: ${colors.primary};
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;