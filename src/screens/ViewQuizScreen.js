import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';

// Assuming quizzesByClass and quizzesByDepartment are defined somewhere
const quizzesByClass = {
  '1st Grade': [
    { id: 'q1', question: 'What color is the sky?', options: ['Blue', 'Green', 'Red', 'Yellow'] },
    { id: 'q2', question: 'How many legs does a dog have?', options: ['2', '3', '4', '5'] },
    { id: 'q3', question: 'What is 1 + 1?', options: ['1', '2', '3', '4'] },
    { id: 'q4', question: 'Which animal says "moo"?', options: ['Cat', 'Dog', 'Cow', 'Sheep'] },
    { id: 'q5', question: 'What is the shape of a ball?', options: ['Square', 'Triangle', 'Circle', 'Rectangle'] },
  ],
  '2nd Grade': [
    { id: 'q1', question: 'What is 2 + 2?', options: ['3', '4', '5', '6'] },
    { id: 'q2', question: 'What is the capital of the USA?', options: ['New York', 'Los Angeles', 'Washington D.C.', 'Chicago'] },
    { id: 'q3', question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'] },
    { id: 'q4', question: 'What do bees make?', options: ['Milk', 'Honey', 'Juice', 'Bread'] },
    { id: 'q5', question: 'How many days are in a week?', options: ['5', '6', '7', '8'] },
  ],
  '3rd Grade': [
    { id: 'q1', question: 'What is the main source of energy for the Earth?', options: ['Moon', 'Sun', 'Stars', 'Wind'] },
    { id: 'q2', question: 'What do plants need to grow?', options: ['Water', 'Plastic', 'Metal', 'Wood'] },
    { id: 'q3', question: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'] },
    { id: 'q4', question: 'What is the largest mammal?', options: ['Elephant', 'Whale', 'Tiger', 'Bear'] },
    { id: 'q5', question: 'Which is the fastest land animal?', options: ['Elephant', 'Lion', 'Cheetah', 'Horse'] },
  ],
  '4th Grade': [
    { id: 'q1', question: 'What is the capital of France?', options: ['Paris', 'London', 'Rome', 'Berlin'] },
    { id: 'q2', question: 'What gas do plants need to perform photosynthesis?', options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'] },
    { id: 'q3', question: 'What is the boiling point of water?', options: ['0°C', '50°C', '100°C', '150°C'] },
    { id: 'q4', question: 'What is the largest planet in our solar system?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'] },
    { id: 'q5', question: 'Who wrote "Romeo and Juliet"?', options: ['Shakespeare', 'Dickens', 'Austen', 'Hemingway'] },
  ],
  '5th Grade': [
    { id: 'q1', question: 'What is the process by which plants make their food?', options: ['Respiration', 'Photosynthesis', 'Digestion', 'Evaporation'] },
    { id: 'q2', question: 'Who was the first President of the United States?', options: ['Lincoln', 'Washington', 'Jefferson', 'Adams'] },
    { id: 'q3', question: 'What is the smallest unit of matter?', options: ['Molecule', 'Atom', 'Cell', 'Particle'] },
    { id: 'q4', question: 'What is the chemical symbol for Gold?', options: ['Au', 'Ag', 'Pb', 'Fe'] },
    { id: 'q5', question: 'What is the hardest natural substance on Earth?', options: ['Gold', 'Iron', 'Diamond', 'Platinum'] },
  ],
  '6th Grade': [
    { id: 'q1', question: 'What is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'] },
    { id: 'q2', question: 'What is the formula for calculating the area of a rectangle?', options: ['Length × Width', 'Length + Width', '2 × (Length + Width)', 'Length ÷ Width'] },
    { id: 'q3', question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Endoplasmic Reticulum'] },
    { id: 'q4', question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'] },
    { id: 'q5', question: 'Who proposed the theory of relativity?', options: ['Newton', 'Einstein', 'Galileo', 'Hawking'] },
  ],
  '7th Grade': [
    { id: 'q1', question: 'What is the chemical symbol for Sodium?', options: ['Na', 'S', 'So', 'Sd'] },
    { id: 'q2', question: 'Which planet is known for its rings?', options: ['Mars', 'Saturn', 'Jupiter', 'Uranus'] },
    { id: 'q3', question: 'What is the basic unit of heredity?', options: ['Cell', 'Gene', 'Chromosome', 'DNA'] },
    { id: 'q4', question: 'What is the main language spoken in Brazil?', options: ['Spanish', 'Portuguese', 'English', 'French'] },
    { id: 'q5', question: 'Who wrote "To Kill a Mockingbird"?', options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'] },
  ],
  '8th Grade': [
    { id: 'q1', question: 'What is the Pythagorean Theorem?', options: ['a² + b² = c²', 'a² + b² = d²', 'a + b = c', 'a × b = c'] },
    { id: 'q2', question: 'What is the chemical formula for Table Salt?', options: ['NaCl', 'HCl', 'KCl', 'CaCl₂'] },
    { id: 'q3', question: 'Who is known as the Father of Modern Physics?', options: ['Einstein', 'Newton', 'Galileo', 'Feynman'] },
    { id: 'q4', question: 'What is the most abundant gas in Earth\'s atmosphere?', options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon Dioxide'] },
    { id: 'q5', question: 'What is the process of cell division called?', options: ['Mitosis', 'Meiosis', 'Binary Fission', 'Photosynthesis'] },
  ],
  '9th Grade': [
    { id: 'q1', question: 'What is the derivative of x²?', options: ['2x', 'x', 'x²', '2x²'] },
    { id: 'q2', question: 'What is the chemical formula for Acetic Acid?', options: ['CH₃COOH', 'H₂SO₄', 'HCl', 'CH₄'] },
    { id: 'q3', question: 'What is the main organ of the circulatory system?', options: ['Lung', 'Heart', 'Liver', 'Kidney'] },
    { id: 'q4', question: 'What is the capital city of Canada?', options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'] },
    { id: 'q5', question: 'What is the study of living organisms called?', options: ['Physics', 'Biology', 'Chemistry', 'Astronomy'] },
  ],
  '10th Grade': [
    { id: 'q1', question: 'What is the Law of Conservation of Mass?', options: ['Mass cannot be created or destroyed', 'Energy is conserved', 'Mass is proportional to volume', 'Mass is constant'] },
    { id: 'q2', question: 'What is the capital of Japan?', options: ['Tokyo', 'Kyoto', 'Osaka', 'Nagoya'] },
    { id: 'q3', question: 'What is the formula for calculating force?', options: ['F = ma', 'F = m/v', 'F = v/a', 'F = m + a'] },
    { id: 'q4', question: 'Who developed the periodic table?', options: ['Mendeleev', 'Curie', 'Einstein', 'Bohr'] },
    { id: 'q5', question: 'What is the process of converting light energy into chemical energy in plants?', options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Decomposition'] },
  ],
  '11th Grade': [
    { id: 'q1', question: 'What is the integral of 1/x?', options: ['ln|x| + C', 'x² + C', 'e^x + C', '1/x² + C'] },
    { id: 'q2', question: 'What is the chemical symbol for Potassium?', options: ['K', 'P', 'Po', 'Pt'] },
    { id: 'q3', question: 'Who is the author of "Pride and Prejudice"?', options: ['Jane Austen', 'Charlotte Brontë', 'Emily Dickinson', 'Mary Shelley'] },
    { id: 'q4', question: 'What is the general formula for a hydrocarbon?', options: ['CnH2n+2', 'CnH2n', 'CnH2n-2', 'CnH2n+1'] },
    { id: 'q5', question: 'What is the primary function of the kidney?', options: ['Filter blood', 'Produce hormones', 'Digest food', 'Store energy'] },
  ],
  '12th Grade': [
    { id: 'q1', question: 'What is the derivative of sin(x)?', options: ['cos(x)', 'sin(x)', '-cos(x)', '-sin(x)'] },
    { id: 'q2', question: 'What is the chemical symbol for Silver?', options: ['Ag', 'Au', 'Si', 'Pb'] },
    { id: 'q3', question: 'What is the main focus of Political Science?', options: ['Government', 'Economics', 'Biology', 'Physics'] },
    { id: 'q4', question: 'Who is considered the father of economics?', options: ['Adam Smith', 'John Maynard Keynes', 'Karl Marx', 'David Ricardo'] },
    { id: 'q5', question: 'What is the general theory of relativity about?', options: ['Gravity', 'Electromagnetism', 'Quantum Mechanics', 'Nuclear Forces'] },
  ],

};

const quizzesByDepartment = {
  'Computer Science': [
    { id: 'q1', question: 'What does CPU stand for?', options: ['Central Processing Unit', 'Central Program Unit', 'Computer Personal Unit', 'Central Power Unit'] },
    { id: 'q2', question: 'What is an algorithm?', options: ['A step-by-step procedure', 'A type of software', 'A computer virus', 'A hardware component'] },
    { id: 'q3', question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'HyperText Multi Language', 'HyperLink Markup Language', 'HyperText Markup List'] },
    { id: 'q4', question: 'What is the main function of RAM?', options: ['Store temporary data', 'Store permanent data', 'Control input devices', 'Manage output devices'] },
    { id: 'q5', question: 'What does GUI stand for?', options: ['Graphical User Interface', 'Graphical Unified Interface', 'General User Interface', 'General Unified Interface'] },
  ],
  'Engineering': [
    { id: 'q1', question: 'What is Ohm\'s Law?', options: ['V = IR', 'P = VI', 'E = mc²', 'F = ma'] },
    { id: 'q2', question: 'What is the unit of electrical resistance?', options: ['Ohm', 'Watt', 'Volt', 'Ampere'] },
    { id: 'q3', question: 'What does CAD stand for?', options: ['Computer-Aided Design', 'Computer-Analog Design', 'Computer-Added Design', 'Computer-Automated Design'] },
    { id: 'q4', question: 'What is the principle behind a lever?', options: ['Mechanical advantage', 'Thermal efficiency', 'Electrical conductivity', 'Optical clarity'] },
    { id: 'q5', question: 'What is the unit of force?', options: ['Newton', 'Joule', 'Watt', 'Pascal'] },
  ],
  'Business Administration': [
    { id: 'q1', question: 'What does ROI stand for?', options: ['Return on Investment', 'Return on Income', 'Revenue on Investment', 'Revenue on Income'] },
    { id: 'q2', question: 'What is a SWOT analysis?', options: ['Strengths, Weaknesses, Opportunities, Threats', 'Sales, Wages, Operating Costs, Taxes', 'Systematic Workflow Operational Tactics', 'Sales With Outstanding Transactions'] },
    { id: 'q3', question: 'What is a business plan?', options: ['A formal document outlining business objectives', 'A list of customer complaints', 'A financial audit report', 'A marketing campaign'] },
    { id: 'q4', question: 'What is a balance sheet?', options: ['A financial statement showing assets, liabilities, and equity', 'A report on company sales', 'A document outlining employee performance', 'A marketing strategy plan'] },
    { id: 'q5', question: 'What is the purpose of market research?', options: ['Understand market needs and trends', 'Reduce production costs', 'Increase employee satisfaction', 'Develop new products'] },
  ],
  'Mathematics': [
    { id: 'q1', question: 'What is the Pythagorean Theorem?', options: ['a² + b² = c²', 'a² - b² = c²', 'a + b = c', 'a × b = c'] },
    { id: 'q2', question: 'What is the value of π (Pi) approximately?', options: ['3.14', '2.71', '1.62', '3.00'] },
    { id: 'q3', question: 'What is the quadratic formula?', options: ['x = (-b ± √(b² - 4ac)) / 2a', 'x = (-b ± √(b² + 4ac)) / 2a', 'x = (-b ± 2√(b² - 4ac)) / 2a', 'x = (-b ± √(b² + c)) / 2'] },
    { id: 'q4', question: 'What is the slope of the line y = 2x + 3?', options: ['2', '3', '1', '4'] },
    { id: 'q5', question: 'What is the value of 7 factorial (7!)?', options: ['5040', '720', '120', '24'] },
  ],
  'Physics': [
    { id: 'q1', question: 'What is Newton\'s Second Law of Motion?', options: ['F = ma', 'E = mc²', 'P = IV', 'V = IR'] },
    { id: 'q2', question: 'What is the unit of force?', options: ['Newton', 'Joule', 'Watt', 'Pascal'] },
    { id: 'q3', question: 'What is the speed of light in a vacuum?', options: ['3 × 10^8 m/s', '3 × 10^6 m/s', '3 × 10^10 m/s', '3 × 10^9 m/s'] },
    { id: 'q4', question: 'What is the formula for kinetic energy?', options: ['KE = ½ mv²', 'KE = mgh', 'KE = qV', 'KE = ½ kx²'] },
    { id: 'q5', question: 'What is the conservation of energy?', options: ['Energy cannot be created or destroyed', 'Energy is created and destroyed', 'Energy is proportional to mass', 'Energy is constant in an isolated system'] },
  ],
  'Chemistry': [
    { id: 'q1', question: 'What is the atomic number of Carbon?', options: ['6', '8', '12', '14'] },
    { id: 'q2', question: 'What is the formula for water?', options: ['H₂O', 'CO₂', 'NaCl', 'CH₄'] },
    { id: 'q3', question: 'What is the pH level of water?', options: ['7', '5', '9', '10'] },
    { id: 'q4', question: 'What is an acid?', options: ['A substance that donates protons', 'A substance that accepts protons', 'A substance that donates electrons', 'A substance that accepts electrons'] },
    { id: 'q5', question: 'What is the process of separating a mixture by distillation?', options: ['Heating and cooling to separate components', 'Filtering to remove solids', 'Mixing to combine substances', 'Using a centrifuge to separate components'] },
  ],
  'Biology': [
    { id: 'q1', question: 'What is the basic unit of life?', options: ['Cell', 'Organ', 'Tissue', 'Organism'] },
    { id: 'q2', question: 'What is DNA?', options: ['Genetic material', 'A type of protein', 'A cellular organelle', 'A carbohydrate'] },
    { id: 'q3', question: 'What is the process of cell division called?', options: ['Mitosis', 'Meiosis', 'Fission', 'Replication'] },
    { id: 'q4', question: 'What is the powerhouse of the cell?', options: ['Mitochondria', 'Nucleus', 'Ribosome', 'Golgi Apparatus'] },
    { id: 'q5', question: 'What is the main function of the cell membrane?', options: ['Regulate what enters and exits the cell', 'Produce energy', 'Store genetic information', 'Transport materials'] },
  ],
  'Economics': [
    { id: 'q1', question: 'What is GDP?', options: ['Gross Domestic Product', 'Gross Domestic Profit', 'Gross Domestic Purchase', 'Gross Development Product'] },
    { id: 'q2', question: 'What does inflation refer to?', options: ['Increase in prices', 'Decrease in prices', 'Stable prices', 'Increase in demand'] },
    { id: 'q3', question: 'What is a market economy?', options: ['An economy based on supply and demand', 'An economy controlled by the government', 'An economy based on barter', 'An economy without any regulations'] },
    { id: 'q4', question: 'What is fiscal policy?', options: ['Government spending and taxation', 'Monetary policy by the central bank', 'International trade agreements', 'Regulations on financial markets'] },
    { id: 'q5', question: 'What is a monopoly?', options: ['A market structure with one producer', 'A market structure with many producers', 'A type of government regulation', 'A strategy for international trade'] },
  ],
  'Psychology': [
    { id: 'q1', question: 'What is the focus of cognitive psychology?', options: ['Mental processes and functions', 'Behavioral responses', 'Social interactions', 'Developmental stages'] },
    { id: 'q2', question: 'Who is known as the father of psychology?', options: ['Wilhelm Wundt', 'Sigmund Freud', 'John Watson', 'B.F. Skinner'] },
    { id: 'q3', question: 'What is classical conditioning?', options: ['Learning through association', 'Learning through rewards and punishments', 'Learning through observation', 'Learning through reasoning'] },
    { id: 'q4', question: 'What is a personality trait?', options: ['A characteristic pattern of thinking, feeling, and behaving', 'A temporary state of mood', 'A learned behavior', 'A biological function'] },
    { id: 'q5', question: 'What is the purpose of psychotherapy?', options: ['To treat mental health issues', 'To diagnose physical health problems', 'To provide educational counseling', 'To conduct scientific research'] },
  ],
  'Political Science': [
    { id: 'q1', question: 'What is a democracy?', options: ['A system of government by the whole population', 'A system of government by a single ruler', 'A system of government by a small group', 'A system of government by the military'] },
    { id: 'q2', question: 'What is the role of the judiciary?', options: ['To interpret laws', 'To create laws', 'To enforce laws', 'To veto laws'] },
    { id: 'q3', question: 'What is a political party?', options: ['An organized group seeking to gain political power', 'A group of independent politicians', 'A non-governmental organization', 'A type of economic system'] },
    { id: 'q4', question: 'What does the term "separation of powers" refer to?', options: ['Division of government responsibilities into distinct branches', 'A division between government and private sectors', 'A division of economic resources', 'A separation between local and national governments'] },
    { id: 'q5', question: 'What is an electoral system?', options: ['A method of electing representatives', 'A system of taxation', 'A type of government organization', 'A method of law enforcement'] },
  ],
  'History': [
    { id: 'q1', question: 'Who was the first President of the United States?', options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'] },
    { id: 'q2', question: 'What was the main cause of World War I?', options: ['Assassination of Archduke Franz Ferdinand', 'The signing of the Treaty of Versailles', 'The fall of the Berlin Wall', 'The Great Depression'] },
    { id: 'q3', question: 'What ancient civilization built the pyramids?', options: ['Egyptians', 'Greeks', 'Romans', 'Mayans'] },
    { id: 'q4', question: 'Who was the leader of the Soviet Union during World War II?', options: ['Joseph Stalin', 'Vladimir Lenin', 'Leon Trotsky', 'Nikita Khrushchev'] },
    { id: 'q5', question: 'What was the Renaissance?', options: ['A cultural revival of art and learning', 'A period of economic decline', 'A political revolution', 'A technological advancement'] },
  ],
  'Sociology': [
    { id: 'q1', question: 'What is sociology?', options: ['The study of human social behavior', 'The study of physical structures', 'The study of animal behavior', 'The study of chemical processes'] },
    { id: 'q2', question: 'What is a social institution?', options: ['A complex set of social norms and roles', 'A type of economic market', 'A form of government', 'A type of cultural artifact'] },
    { id: 'q3', question: 'What is the concept of socialization?', options: ['The process of learning and internalizing societal norms', 'The process of creating social networks', 'The process of economic exchange', 'The process of technological advancement'] },
    { id: 'q4', question: 'What is the role of family in sociology?', options: ['The primary unit of socialization', 'A type of economic institution', 'A form of political organization', 'A type of educational system'] },
    { id: 'q5', question: 'What is a social norm?', options: ['An expected pattern of behavior within a society', 'A legal requirement', 'A personal preference', 'A type of economic policy'] },
],

};

const ViewQuizScreen = ({ route }) => {
  const { userType = 'Guest', classSelected = 'N/A', department = 'N/A' } = route.params || {};

  // Get the quiz for the selected class or department
  const questions = userType === 'School'
    ? quizzesByClass[classSelected] || []
    : quizzesByDepartment[department] || [];

  // State to manage the selected answers
  const [answers, setAnswers] = useState({});

  // Function to handle answer selection
  const handleAnswerChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    Alert.alert('Submitted answers', JSON.stringify(answers, null, 2));
    // Here you can handle the submission, e.g., send the answers to a server
  };

  // Determine the quiz header text
  const quizHeaderText = userType === 'School'
    ? `Quiz for Grade ${classSelected !== 'N/A' ? classSelected : 'Your Selection'}`
    : `${department !== 'N/A' ? department : 'Your Department'} Department Quiz`;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>{quizHeaderText}</Text>
      {questions.length > 0 ? (
        questions.map((question) => (
          <View key={question.id} style={styles.questionContainer}>
            <Text style={styles.questionText}>{question.question}</Text>
            {question.options.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionContainer,
                  answers[question.id] === option && styles.selectedOption,
                ]}
                onPress={() => handleAnswerChange(question.id, option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))
      ) : (
        <Text style={styles.noQuizText}>No quiz available for this selection.</Text>
      )}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  optionContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
  },
  selectedOption: {
    backgroundColor: '#008080',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  noQuizText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#008080',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ViewQuizScreen;
