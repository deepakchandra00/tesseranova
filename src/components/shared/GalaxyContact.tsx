'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactNode {
  id: string;
  label: string;
  type: 'hq' | 'market' | 'service';
  x: number;
  y: number;
  info: string;
}

const contactNodes: ContactNode[] = [
  {
    id: 'ahmedabad',
    label: 'Ahmedabad HQ',
    type: 'hq',
    x: 50,
    y: 50,
    info: 'Global Headquarters - Innovation Center',
  },
  {
    id: 'us',
    label: 'US Market',
    type: 'market',
    x: 20,
    y: 30,
    info: 'North American Operations',
  },
  {
    id: 'eu',
    label: 'EU Market',
    type: 'market',
    x: 80,
    y: 25,
    info: 'European Operations',
  },
  {
    id: 'cloud',
    label: 'Cloud Services',
    type: 'service',
    x: 30,
    y: 70,
    info: 'Global Cloud Infrastructure',
  },
  {
    id: 'support',
    label: '24/7 Support',
    type: 'service',
    x: 70,
    y: 75,
    info: 'Round-the-clock assistance',
  },
];

const connections = [
  { from: 'ahmedabad', to: 'us' },
  { from: 'ahmedabad', to: 'eu' },
  { from: 'ahmedabad', to: 'cloud' },
  { from: 'ahmedabad', to: 'support' },
  { from: 'us', to: 'cloud' },
  { from: 'eu', to: 'support' },
];

export default function GalaxyContact() {
  const [selectedNode, setSelectedNode] = useState<string>('ahmedabad');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const getNodeColor = (type: string, isSelected: boolean, isHovered: boolean) => {
    if (isSelected || isHovered) {
      switch (type) {
        case 'hq': return 'from-aurora-400 to-aurora-600';
        case 'market': return 'from-starlight-400 to-starlight-600';
        case 'service': return 'from-nebula-400 to-nebula-600';
        default: return 'from-cosmic-400 to-cosmic-600';
      }
    }
    return 'from-cosmic-300 to-cosmic-500';
  };

  const getNodeSize = (type: string, isSelected: boolean) => {
    if (type === 'hq') return isSelected ? 'w-8 h-8' : 'w-6 h-6';
    return isSelected ? 'w-6 h-6' : 'w-4 h-4';
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-b from-space-950 via-space-900 to-space-950 rounded-2xl overflow-hidden border border-space-700/50">
      {/* Background galaxy effect */}
      <div className="absolute inset-0 bg-gradient-radial from-starlight-500/10 via-transparent to-transparent" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map((connection, index) => {
          const fromNode = contactNodes.find(n => n.id === connection.from);
          const toNode = contactNodes.find(n => n.id === connection.to);
          
          if (!fromNode || !toNode) return null;

          const isActive = selectedNode === connection.from || selectedNode === connection.to ||
                          hoveredNode === connection.from || hoveredNode === connection.to;

          return (
            <motion.line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={isActive ? '#7b61ff' : 'rgba(123, 97, 255, 0.2)'}
              strokeWidth={isActive ? '0.3' : '0.1'}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: isActive ? 0.8 : 0.3,
              }}
              transition={{ 
                duration: 1.5,
                delay: index * 0.1,
              }}
            />
          );
        })}
      </svg>

      {/* Contact nodes */}
      {contactNodes.map((node) => {
        const isSelected = selectedNode === node.id;
        const isHovered = hoveredNode === node.id;
        
        return (
          <motion.div
            key={node.id}
            className="absolute cursor-pointer group"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
            onClick={() => setSelectedNode(node.id)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Node */}
            <motion.div
              className={`${getNodeSize(node.type, isSelected)} bg-gradient-to-r ${getNodeColor(node.type, isSelected, isHovered)} rounded-full relative`}
              animate={{
                boxShadow: isSelected || isHovered
                  ? ['0 0 15px rgba(123, 97, 255, 0.5)', '0 0 25px rgba(123, 97, 255, 0.8)', '0 0 15px rgba(123, 97, 255, 0.5)']
                  : '0 0 8px rgba(123, 97, 255, 0.3)',
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Pulse ring for HQ */}
              {node.type === 'hq' && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-aurora-400"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.8, 0, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              )}
            </motion.div>

            {/* Label */}
            <motion.div
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isSelected || isHovered ? 1 : 0.7 }}
            >
              <p className="text-cosmic-200 text-xs font-medium whitespace-nowrap">
                {node.label}
              </p>
            </motion.div>

            {/* Info panel */}
            {isSelected && (
              <motion.div
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-space-800/95 backdrop-blur-sm rounded-lg p-4 min-w-48 z-20"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-cosmic-100 font-semibold mb-2">{node.label}</h4>
                <p className="text-cosmic-300 text-sm mb-3">{node.info}</p>
                
                {node.type === 'hq' && (
                  <div className="space-y-2">
                    <p className="text-aurora-400 text-xs">📍 Innovation Hub</p>
                    <p className="text-starlight-400 text-xs">🌐 Global Coordination</p>
                    <p className="text-nebula-400 text-xs">🚀 R&D Center</p>
                  </div>
                )}
                
                {node.type === 'market' && (
                  <div className="space-y-1">
                    <p className="text-starlight-400 text-xs">🎯 Market Focus</p>
                    <p className="text-cosmic-300 text-xs">📈 Business Development</p>
                  </div>
                )}
                
                {node.type === 'service' && (
                  <div className="space-y-1">
                    <p className="text-nebula-400 text-xs">⚡ Always Available</p>
                    <p className="text-cosmic-300 text-xs">🛠️ Technical Support</p>
                  </div>
                )}

                {/* Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-space-800/95" />
              </motion.div>
            )}
          </motion.div>
        );
      })}

      {/* Title and instructions */}
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-xl font-bold font-cosmic text-cosmic-100 mb-1">
          Global Network
        </h3>
        <p className="text-cosmic-300 text-xs">
          Click nodes to explore our cosmic reach
        </p>
      </div>

      {/* Contact CTA */}
      <div className="absolute bottom-4 right-4 z-10">
        <motion.button
          className="btn-holographic text-sm px-4 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect with Us
        </motion.button>
      </div>
    </div>
  );
}