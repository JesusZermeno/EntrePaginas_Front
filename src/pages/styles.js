import styled from 'styled-components';
import { Link } from 'react-router-dom';

// CartPage Styles
export const CartContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto 2rem auto;
  padding: 3rem 2rem 2.5rem 2rem;
  background: linear-gradient(120deg, #fff 80%, rgba(199,210,254,0.15) 100%);
  border-radius: 32px;
  box-shadow: 0 8px 32px rgba(30,41,59,0.10);
  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
    border-radius: 18px;
  }
`;
export const CartTitle = styled.h2`
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;
export const CartList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: rgba(199,210,254,0.08);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(30,41,59,0.04);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30,41,59,0.08);
  }
`;
export const CartCover = styled.img`
  width: 70px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(30,41,59,0.08);
  border: 2px solid #c7d2fe;
`;
export const CartInfo = styled.div`
  flex: 1;
`;
export const CartBookTitle = styled(Link)`
  font-weight: 600;
  font-size: 1.1rem;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: block;
  margin-bottom: 0.3rem;
`;
export const CartAuthor = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
`;
export const RemoveBtn = styled.button`
  background: linear-gradient(90deg, #dc2626 30%, #ef4444 100%);
  color: #fff;
  border: none;
  border-radius: 18px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(30,41,59,0.08);
  &:hover {
    background: linear-gradient(90deg, #b91c1c 30%, #dc2626 100%);
    box-shadow: 0 4px 12px rgba(30,41,59,0.12);
    transform: translateY(-1px);
  }
`;
export const CartTotal = styled.div`
  text-align: right;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const ClearBtn = styled.button`
  background: linear-gradient(90deg, #1e293b 30%, #334155 100%);
  color: #fff;
  border: none;
  border-radius: 22px;
  padding: 0.7rem 1.4rem;
  font-size: 1.05rem;
  font-weight: 500;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(30,41,59,0.08);
  &:hover {
    background: linear-gradient(90deg, #334155 30%, #475569 100%);
    box-shadow: 0 4px 12px rgba(30,41,59,0.12);
    transform: translateY(-1px);
  }
`;
export const CartEmpty = styled.div`
  text-align: center;
  color: #64748b;
  font-size: 1.2rem;
  margin: 3rem 0;
  background: rgba(199,210,254,0.13);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(30,41,59,0.04);
`;

// Login/Register Styles
export const AuthContainer = styled.div`
  max-width: 400px;
  margin: 3rem auto 2rem auto;
  background: linear-gradient(120deg, #fff 80%, rgba(199,210,254,0.15) 100%);
  border-radius: 32px;
  box-shadow: 0 8px 32px rgba(30,41,59,0.10);
  padding: 3rem 2rem 2.5rem 2rem;
  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
    border-radius: 18px;
  }
`;
export const AuthTitle = styled.h2`
  text-align: center;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const AuthInput = styled.input`
  padding: 1rem 1.2rem;
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  font-size: 1rem;
  background: #fff;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(30,41,59,0.04);
  &:focus {
    border: 2px solid #2563eb;
    outline: none;
    box-shadow: 0 0 0 3px rgba(37,99,235,0.1), 0 2px 8px rgba(30,41,59,0.04);
  }
`;
export const AuthButton = styled.button`
  padding: 1rem 1.2rem;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  color: #fff;
  border: none;
  border-radius: 16px;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(30,41,59,0.08);
  &:hover:not(:disabled) {
    background: linear-gradient(90deg, #166534 30%, #1d4ed8 100%);
    box-shadow: 0 4px 12px rgba(30,41,59,0.12);
    transform: translateY(-1px);
  }
  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    transform: none;
  }
`;
export const AuthError = styled.div`
  color: #dc2626;
  text-align: center;
  margin-bottom: 0.5rem;
  background: rgba(220,38,38,0.1);
  border-radius: 12px;
  padding: 0.8rem;
  font-weight: 500;
`;
export const AuthSuccess = styled.div`
  color: #15803d;
  text-align: center;
  margin-bottom: 0.5rem;
  background: rgba(21,128,61,0.1);
  border-radius: 12px;
  padding: 0.8rem;
  font-weight: 500;
`;

// Explore Styles
export const ExploreContainer = styled.div`
  max-width: 1200px;
  margin: 3rem auto 2rem auto;
  padding: 3rem 2rem 2.5rem 2rem;
  background: linear-gradient(120deg, #fff 80%, rgba(199,210,254,0.15) 100%);
  border-radius: 32px;
  box-shadow: 0 8px 32px rgba(30,41,59,0.10);
  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
    border-radius: 18px;
  }
`;
export const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 2.2rem;
  background: linear-gradient(90deg, #f0fdfa 0%, #c7d2fe 100%);
  border-radius: 24px;
  padding: 0.5rem;
  box-shadow: 0 4px 16px rgba(30,41,59,0.08);
`;
export const SearchInput = styled.input`
  padding: 0.8rem 1.1rem;
  border: 1px solid #e5e7eb;
  border-radius: 20px 0 0 20px;
  font-size: 1rem;
  width: 340px;
  background: #fff;
  outline: none;
  transition: border 0.2s, box-shadow 0.2s;
  &:focus {
    border: 1.5px solid #2563eb;
    box-shadow: 0 0 0 3px rgba(37,99,235,0.1);
  }
`;
export const SearchButton = styled.button`
  padding: 0.8rem 1.3rem;
  border: none;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  color: #fff;
  border-radius: 0 20px 20px 0;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(90deg, #166534 30%, #1d4ed8 100%);
    box-shadow: 0 2px 8px rgba(30,41,59,0.15);
  }
`;
export const ExploreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 2.2rem;
  padding: 1rem 0;
`;

// BookDetails Styles
export const DetailsContainer = styled.div`
  max-width: 900px;
  margin: 3rem auto 2rem auto;
  padding: 3rem 2rem 2.5rem 2rem;
  background: linear-gradient(120deg, #fff 80%, rgba(199,210,254,0.15) 100%);
  border-radius: 32px;
  box-shadow: 0 8px 32px rgba(30,41,59,0.10);
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
    border-radius: 18px;
  }
`;
export const DetailsCover = styled.img`
  width: 220px;
  height: 320px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(30, 41, 59, 0.12);
  background: #e0f2fe;
  border: 2px solid #c7d2fe;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 32px rgba(30,41,59,0.18);
  }
`;
export const DetailsInfo = styled.div`
  flex: 1;
  min-width: 250px;
`;
export const DetailsTitle = styled.h2`
  margin-top: 0;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
export const DetailsAuthor = styled.p`
  color: #64748b;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-style: italic;
`;
export const DetailsDesc = styled.p`
  margin: 1.5rem 0 1rem 0;
  color: #334155;
  line-height: 1.7;
  font-size: 1.05rem;
`;
export const DetailsMeta = styled.div`
  font-size: 1rem;
  color: #475569;
  margin-bottom: 1.2rem;
  background: rgba(199,210,254,0.13);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  box-shadow: 0 2px 8px rgba(30,41,59,0.04);
`;
export const DownloadLink = styled.a`
  display: inline-block;
  margin-right: 1rem;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 22px;
  font-weight: 500;
  font-size: 0.97rem;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(30,41,59,0.08);
  &:hover {
    background: linear-gradient(90deg, #166534 30%, #1d4ed8 100%);
    box-shadow: 0 4px 12px rgba(30,41,59,0.12);
    transform: translateY(-1px);
  }
`;

// Home Styles
export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 3rem auto 2rem auto;
  padding: 3rem 2rem 2.5rem 2rem;
  background: linear-gradient(120deg, #fff 80%, rgba(199,210,254,0.15) 100%);
  border-radius: 32px;
  box-shadow: 0 8px 32px rgba(30,41,59,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 2rem 0.5rem;
    border-radius: 18px;
  }
`;
export const HomeTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(90deg, #15803d 30%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-bottom: 1.2rem;
  text-align: center;
  letter-spacing: -1px;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
export const HomeDesc = styled.p`
  font-size: 1.25rem;
  color: #334155;
  max-width: 700px;
  margin-bottom: 2.5rem;
  text-align: center;
  line-height: 1.7;
  background: rgba(199,210,254,0.13);
  border-radius: 16px;
  padding: 1.2rem 1.5rem;
  box-shadow: 0 2px 12px rgba(30,41,59,0.04);
`; 