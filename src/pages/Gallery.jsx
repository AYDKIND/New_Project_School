import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal, Badge, Nav } from 'react-bootstrap';

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Professional school photos with categories
  const galleryImages = [
    {
      id: 1,
      title: "School Main Building",
      category: "infrastructure",
      description: "Our modern and well-designed main academic building",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjhmOWZhIi8+CjxyZWN0IHg9IjUwIiB5PSIxMDAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZGVlMmU2IiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSI4MCIgeT0iMTMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2MzY2ZjEiLz4KPHJlY3QgeD0iMTQwIiB5PSIxMzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzYzNjZmMSIvPgo8cmVjdCB4PSIyMDAiIHk9IjEzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjNjM2NmYxIi8+CjxyZWN0IHg9IjI2MCIgeT0iMTMwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9IiM2MzY2ZjEiLz4KPHJlY3QgeD0iMTcwIiB5PSIyMDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI1MCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMDAiIHk9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzc0MTUxIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj5TY2hvb2wgQnVpbGRpbmc8L3RleHQ+Cjwvc3ZnPgo="
    },
    {
      id: 2,
      title: "Science Laboratory",
      category: "facilities",
      description: "State-of-the-art science lab for hands-on learning",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjBmOWZmIi8+CjxyZWN0IHg9IjUwIiB5PSIxMDAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZGRmNGZmIiBzdHJva2U9IiMwMzg0ZDkiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxNDAiIHI9IjE1IiBmaWxsPSIjMDM4NGQ5Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjE0MCIgcj0iMTUiIGZpbGw9IiMxMGI5ODEiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTQwIiByPSIxNSIgZmlsbD0iI2Y1OWU0MiIvPgo8Y2lyY2xlIGN4PSIyNTAiIGN5PSIxNDAiIHI9IjE1IiBmaWxsPSIjZWY0NDQ0Ii8+CjxyZWN0IHg9IjEwMCIgeT0iMTcwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMzNzQxNTEiLz4KPHJlY3QgeD0iMTUwIiB5PSIxNzAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzM3NDE1MSIvPgo8cmVjdCB4PSIyMDAiIHk9IjE3MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMzc0MTUxIi8+CjxyZWN0IHg9IjI1MCIgeT0iMTcwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMzNzQxNTEiLz4KPHRleHQgeD0iMjAwIiB5PSI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM3NDE1MSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCI+U2NpZW5jZSBMYWI8L3RleHQ+Cjwvc3ZnPgo="
    },
    {
      id: 3,
      title: "Computer Lab",
      category: "facilities",
      description: "Modern computer lab with latest technology",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZmVmZWZlIi8+CjxyZWN0IHg9IjgwIiB5PSIxMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzM3NDE1MSIgcng9IjQiLz4KPHJlY3QgeD0iODUiIHk9IjEyNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjNjM2NmYxIi8+CjxyZWN0IHg9IjE3MCIgeT0iMTIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNDAiIGZpbGw9IiMzNzQxNTEiIHJ4PSI0Ii8+CjxyZWN0IHg9IjE3NSIgeT0iMTI1IiB3aWR0aD0iNTAiIGhlaWdodD0iMzAiIGZpbGw9IiM2MzY2ZjEiLz4KPHJlY3QgeD0iMjYwIiB5PSIxMjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI0MCIgZmlsbD0iIzM3NDE1MSIgcng9IjQiLz4KPHJlY3QgeD0iMjY1IiB5PSIxMjUiIHdpZHRoPSI1MCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzYzNjZmMSIvPgo8cmVjdCB4PSI5NSIgeT0iMTcwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTAiIGZpbGw9IiNkMWQ1ZGIiLz4KPHJlY3QgeD0iMTg1IiB5PSIxNzAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2QxZDVkYiIvPgo8cmVjdCB4PSIyNzUiIHk9IjE3MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZDFkNWRiIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzNzQxNTEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiPkNvbXB1dGVyIExhYjwvdGV4dD4KPC9zdmc+Cg=="
    },
    {
      id: 4,
      title: "Library",
      category: "facilities",
      description: "Well-stocked library with thousands of books",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZmVmN2VkIi8+CjxyZWN0IHg9IjgwIiB5PSIxMDAiIHdpZHRoPSIyNDAiIGhlaWdodD0iMTIwIiBmaWxsPSIjZmVkN2Q3IiBzdHJva2U9IiNkYzI2MjYiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSIxMDAiIHk9IjEyMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjgwIiBmaWxsPSIjZGMyNjI2Ii8+CjxyZWN0IHg9IjEyMCIgeT0iMTIwIiB3aWR0aD0iMTUiIGhlaWdodD0iODAiIGZpbGw9IiMxNmEzNGEiLz4KPHJlY3QgeD0iMTQwIiB5PSIxMjAiIHdpZHRoPSIxNSIgaGVpZ2h0PSI4MCIgZmlsbD0iIzI1NjNlYiIvPgo8cmVjdCB4PSIxNjAiIHk9IjEyMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjgwIiBmaWxsPSIjZGMyNjI2Ii8+CjxyZWN0IHg9IjE4MCIgeT0iMTIwIiB3aWR0aD0iMTUiIGhlaWdodD0iODAiIGZpbGw9IiNmNTlmNDIiLz4KPHJlY3QgeD0iMjAwIiB5PSIxMjAiIHdpZHRoPSIxNSIgaGVpZ2h0PSI4MCIgZmlsbD0iIzI1NjNlYiIvPgo8cmVjdCB4PSIyMjAiIHk9IjEyMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjgwIiBmaWxsPSIjMTZhMzRhIi8+CjxyZWN0IHg9IjI0MCIgeT0iMTIwIiB3aWR0aD0iMTUiIGhlaWdodD0iODAiIGZpbGw9IiNkYzI2MjYiLz4KPHJlY3QgeD0iMjYwIiB5PSIxMjAiIHdpZHRoPSIxNSIgaGVpZ2h0PSI4MCIgZmlsbD0iI2Y1OWY0MiIvPgo8cmVjdCB4PSIyODAiIHk9IjEyMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjgwIiBmaWxsPSIjMjU2M2ViIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzNzQxNTEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiPkxpYnJhcnk8L3RleHQ+Cjwvc3ZnPgo="
    },
    {
      id: 5,
      title: "Sports Ground",
      category: "sports",
      description: "Spacious playground for various sports activities",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjBmZGY0Ii8+CjxyZWN0IHg9IjUwIiB5PSIxMDAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZGNmY2U3IiBzdHJva2U9IiMxNmE2NGEiIHN0cm9rZS13aWR0aD0iMyIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxNzUiIHI9IjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNmE2NGEiIHN0cm9rZS13aWR0aD0iMiIvPgo8bGluZSB4MT0iMjAwIiB5MT0iMTAwIiB4Mj0iMjAwIiB5Mj0iMjUwIiBzdHJva2U9IiMxNmE2NGEiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSI1MCIgeT0iMTQwIiB3aWR0aD0iMzAiIGhlaWdodD0iNzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE2YTY0YSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjMyMCIgeT0iMTQwIiB3aWR0aD0iMzAiIGhlaWdodD0iNzAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE2YTY0YSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzNzQxNTEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiPkFubnVhbCBEYXk8L3RleHQ+Cjwvc3ZnPgo="
    },
    {
      id: 6,
      title: "Annual Day Celebration",
      category: "events",
      description: "Students performing during annual day celebration",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZmVmM2M3Ii8+CjxyZWN0IHg9IjUwIiB5PSIxMDAiIHdpZHRoPSIzMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmVkN2Q3IiBzdHJva2U9IiNmNTlmNDIiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIxMjAiIGN5PSIxNDAiIHI9IjIwIiBmaWxsPSIjZjU5ZjQyIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE0MCIgcj0iMjAiIGZpbGw9IiNmNTlmNDIiLz4KPGNpcmNsZSBjeD0iMjgwIiBjeT0iMTQwIiByPSIyMCIgZmlsbD0iI2Y1OWY0MiIvPgo8cG9seWdvbiBwb2ludHM9IjEyMCwxNzAgMTEwLDE4MCAzMCwxODAiIGZpbGw9IiNlZjQ0NDQiLz4KPHBvbHlnb24gcG9pbnRzPSIyMDAsMTcwIDE5MCwxODAgMjEwLDE4MCIgZmlsbD0iIzEwYjk4MSIvPgo8cG9seWdvbiBwb2ludHM9IjI4MCwxNzAgMjcwLDE4MCAyOTAsMTgwIiBmaWxsPSIjMjU2M2ViIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzNzQxNTEiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiPkFubnVhbCBEYXk8L3RleHQ+Cjwvc3ZnPgo="
    },
    {
      id: 7,
      title: "Science Exhibition",
      category: "events",
      description: "Students showcasing their science projects",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjBmOWZmIi8+CjxyZWN0IHg9IjgwIiB5PSIxMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0iI2RkZjRmZiIgc3Ryb2tlPSIjMDM4NGQ5IiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMjQwIiB5PSIxMjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0iI2RkZjRmZiIgc3Ryb2tlPSIjMDM4NGQ5IiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iMTIwIiBjeT0iMTUwIiByPSIxNSIgZmlsbD0iIzEwYjk4MSIvPgo8Y2lyY2xlIGN4PSIyODAiIGN5PSIxNTAiIHI9IjE1IiBmaWxsPSIjZWY0NDQ0Ii8+CjxyZWN0IHg9IjExMCIgeT0iMTcwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMzNzQxNTEiLz4KPHJlY3QgeD0iMjcwIiB5PSIxNzAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzM3NDE1MSIvPgo8dGV4dCB4PSIyMDAiIHk9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzc0MTUxIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIj5TY2llbmNlIEV4aGliaXRpb248L3RleHQ+Cjwvc3ZnPgo="
    },
    {
      id: 8,
      title: "Classroom Learning",
      category: "academics",
      description: "Interactive classroom sessions with smart boards",
      image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZmVmZWZlIi8+CjxyZWN0IHg9IjUwIiB5PSI4MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMzNzQxNTEiIHN0cm9rZT0iIzM3NDE1MSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjYwIiB5PSI5MCIgd2lkdGg9IjI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0iIzYzNjZmMSIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSIyMjAiIHI9IjE1IiBmaWxsPSIjZjU5ZjQyIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjIyMCIgcj0iMTUiIGZpbGw9IiNmNTlmNDIiLz4KPGNpcmNsZSBjeD0iMjAwIiBjeT0iMjIwIiByPSIxNSIgZmlsbD0iI2Y1OWY0MiIvPgo8Y2lyY2xlIGN4PSIyNTAiIGN5PSIyMjAiIHI9IjE1IiBmaWxsPSIjZjU5ZjQyIi8+CjxjaXJjbGUgY3g9IjMwMCIgY3k9IjIyMCIgcj0iMTUiIGZpbGw9IiNmNTlmNDIiLz4KPHRleHQgeD0iMjAwIiB5PSI2MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzM3NDE1MSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCI+Q2xhc3Nyb29tPC90ZXh0Pgo8L3N2Zz4K"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Photos', count: galleryImages.length },
    { key: 'infrastructure', label: 'Infrastructure', count: galleryImages.filter(img => img.category === 'infrastructure').length },
    { key: 'facilities', label: 'Facilities', count: galleryImages.filter(img => img.category === 'facilities').length },
    { key: 'sports', label: 'Sports', count: galleryImages.filter(img => img.category === 'sports').length },
    { key: 'events', label: 'Events', count: galleryImages.filter(img => img.category === 'events').length },
    { key: 'academics', label: 'Academics', count: galleryImages.filter(img => img.category === 'academics').length }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <Container className="py-5">
      {/* Header */}
      <Row className="mb-5">
        <Col>
          <div className="text-center">
            <h1 className="display-4 text-primary mb-3">School Gallery</h1>
            <p className="lead text-muted">
              Capturing moments of learning, growth, and achievement
            </p>
          </div>
        </Col>
      </Row>

      {/* Category Filter */}
      <Row className="mb-4">
        <Col>
          <Nav variant="pills" className="justify-content-center flex-wrap">
            {categories.map(category => (
              <Nav.Item key={category.key} className="mb-2">
                <Nav.Link
                  active={activeCategory === category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className="mx-1"
                >
                  {category.label}
                  <Badge bg="secondary" className="ms-2">
                    {category.count}
                  </Badge>
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
      </Row>

      {/* Gallery Grid */}
      <Row>
        {filteredImages.map(image => (
          <Col lg={4} md={6} className="mb-4" key={image.id}>
            <Card 
              className="h-100 shadow-sm border-0 gallery-card"
              style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
              onClick={() => handleImageClick(image)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <Card.Img 
                  variant="top" 
                  src={image.image}
                  alt={image.title}
                  style={{ 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <Card.Body className="p-3">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h6 className="card-title mb-0 text-primary">{image.title}</h6>
                  <Badge 
                    bg={
                      image.category === 'infrastructure' ? 'primary' :
                      image.category === 'facilities' ? 'success' :
                      image.category === 'sports' ? 'warning' :
                      image.category === 'events' ? 'danger' :
                      'info'
                    }
                    className="text-capitalize"
                  >
                    {image.category}
                  </Badge>
                </div>
                <p className="card-text small text-muted mb-0">
                  {image.description}
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* No Results */}
      {filteredImages.length === 0 && (
        <Row>
          <Col className="text-center py-5">
            <h4 className="text-muted">No photos found in this category</h4>
            <p className="text-muted">Try selecting a different category</p>
          </Col>
        </Row>
      )}

      {/* Image Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg" 
        centered
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="text-primary">
            {selectedImage?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          {selectedImage && (
            <>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-100"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              />
              <div className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <Badge 
                    bg={
                      selectedImage.category === 'infrastructure' ? 'primary' :
                      selectedImage.category === 'facilities' ? 'success' :
                      selectedImage.category === 'sports' ? 'warning' :
                      selectedImage.category === 'events' ? 'danger' :
                      'info'
                    }
                    className="text-capitalize"
                  >
                    {selectedImage.category}
                  </Badge>
                </div>
                <p className="text-muted mb-0">
                  {selectedImage.description}
                </p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>

      {/* Gallery Stats */}
      <Row className="mt-5">
        <Col>
          <Card className="bg-light border-0">
            <Card.Body className="text-center py-4">
              <Row>
                <Col md={3}>
                  <h4 className="text-primary mb-1">{galleryImages.length}</h4>
                  <small className="text-muted">Total Photos</small>
                </Col>
                <Col md={3}>
                  <h4 className="text-success mb-1">
                    {galleryImages.filter(img => img.category === 'facilities').length}
                  </h4>
                  <small className="text-muted">Facilities</small>
                </Col>
                <Col md={3}>
                  <h4 className="text-warning mb-1">
                    {galleryImages.filter(img => img.category === 'events').length}
                  </h4>
                  <small className="text-muted">Events</small>
                </Col>
                <Col md={3}>
                  <h4 className="text-info mb-1">
                    {galleryImages.filter(img => img.category === 'academics').length}
                  </h4>
                  <small className="text-muted">Academic</small>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;

// Helper: infer title/category/description from filename keywords
const inferMetaFromName = (rawName) => {
  const name = (rawName || '').toLowerCase();
  // defaults
  let title = rawName.replace(/\.[^.]+$/, '') || 'Uploaded Photo';
  let category = 'uploads';
  let description = 'User uploaded photo';

  if (name.match(/build|campus|courtyard|school/)) {
    title = 'School Building';
    category = 'infrastructure';
    description = 'Our school building and campus view';
  } else if (name.match(/science|chem|laborat|lab/)) {
    title = 'Science Laboratory';
    category = 'facilities';
    description = 'Hands-on experiments in the science lab';
  } else if (name.match(/computer|it|coding|lab/)) {
    title = 'Computer Laboratory';
    category = 'facilities';
    description = 'Students learning with computers';
  } else if (name.match(/library|books|reading/)) {
    title = 'Library';
    category = 'facilities';
    description = 'Reading and learning in the library';
  } else if (name.match(/sport|ground|basket|football|cricket/)) {
    title = 'Sports Ground';
    category = 'sports';
    description = 'Outdoor sports and activities';
  }

  return { title, category, description };
};

const handleFiles = async (fileList) => {
  setErrorMessage('');
  const files = Array.from(fileList || []);
  if (!files.length) return;

  const violations = files.filter(f => !ALLOWED_TYPES.includes(f.type) || f.size > MAX_SIZE_MB * 1024 * 1024);
  if (violations.length) {
    const typesBad = violations.some(v => !ALLOWED_TYPES.includes(v.type));
    const sizeBad = violations.some(v => v.size > MAX_SIZE_MB * 1024 * 1024);
    setErrorMessage(
      `${typesBad ? 'Only PNG/JPG allowed. ' : ''}${sizeBad ? 'Max size ' + MAX_SIZE_MB + 'MB per image.' : ''}`
    );
    return;
  }

  try {
    const items = await Promise.all(files.map(async (file, idx) => {
      const dataUrl = await readFileAsDataUrl(file);
      const meta = inferMetaFromName(file.name);
      return {
        id: Date.now() + idx,
        title: meta.title,
        category: meta.category,
        description: meta.description,
        image: dataUrl,
        type: file.type,
        size: file.size,
      };
    }));
    setUploadedImages(prev => {
      const next = [...prev, ...items];
      persistUploads(next);
      return next;
    });
  } catch (e) {
    setErrorMessage('Failed to read one or more files.');
  }
};