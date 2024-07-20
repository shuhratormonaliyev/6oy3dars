import React, { useState } from 'react';

const TabSelector = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');

  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  return (
    <div style={styles.container}>
      <div style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={activeTab === tab ? styles.activeTab : styles.tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={styles.content}>
        {activeTab === 'Tab 1' && <p>Content for Tab 1</p>}
        {activeTab === 'Tab 2' && <p>Content for Tab 2</p>}
        {activeTab === 'Tab 3' && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px'
  },
  tabContainer: {
    marginBottom: '20px'
  },
  tab: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  activeTab: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    borderBottom: '2px solid #000'
  },
  content: {
    marginTop: '20px'
  }
};

export default TabSelector;
